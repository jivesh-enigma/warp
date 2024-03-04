version 1.0

import "../../../pipelines/skylab/multiome/atac.wdl" as atac
import "../../../pipelines/skylab/optimus/Optimus.wdl" as optimus
import "../../../tasks/skylab/H5adUtils.wdl" as H5adUtils
import "https://raw.githubusercontent.com/broadinstitute/CellBender/v0.3.0/wdl/cellbender_remove_background.wdl" as CellBender

workflow Multiome {

    String pipeline_version = "3.3.0"

    input {
        String input_id

        # Optimus Inputs
        String counting_mode = "sn_rna"
        Array[File] gex_r1_fastq
        Array[File] gex_r2_fastq
        Array[File]? gex_i1_fastq        
        File tar_star_reference
        File annotations_gtf
        File? mt_genes
        Int tenx_chemistry_version = 3
        Int emptydrops_lower = 100
        Boolean force_no_check = false
        Boolean ignore_r1_read_length = false
        String star_strand_mode = "Forward"
        Boolean count_exons = false
        File gex_whitelist = "gs://gcp-public-data--broad-references/RNA/resources/arc-v1/737K-arc-v1_gex.txt"
        String? soloMultiMappers

        # ATAC inputs
        # Array of input fastq files
        Array[File] atac_r1_fastq
        Array[File] atac_r2_fastq
        Array[File] atac_r3_fastq
        
        # BWA tar reference
        File tar_bwa_reference
        # Chromosone sizes 
        File chrom_sizes
        # Trimadapters input
        String adapter_seq_read1 = "GTCTCGTGGGCTCGGAGATGTGTATAAGAGACAG"
        String adapter_seq_read3 = "TCGTCGGCAGCGTCAGATGTGTATAAGAGACAG"
        # Whitelist
        File atac_whitelist = "gs://gcp-public-data--broad-references/RNA/resources/arc-v1/737K-arc-v1_atac.txt"

        # CellBender
        Boolean run_cellbender = false

    }

    # Call the Optimus workflow
    call optimus.Optimus as Optimus {
        input:
            counting_mode = counting_mode,
            r1_fastq = gex_r1_fastq,
            r2_fastq = gex_r2_fastq,
            i1_fastq = gex_i1_fastq,
            input_id = input_id + "_gex",
            output_bam_basename = input_id + "_gex",
            tar_star_reference = tar_star_reference,
            annotations_gtf = annotations_gtf,
            mt_genes = mt_genes,
            tenx_chemistry_version = tenx_chemistry_version,
            whitelist = gex_whitelist,
            emptydrops_lower = emptydrops_lower,
            force_no_check = force_no_check,
            ignore_r1_read_length = ignore_r1_read_length,
            star_strand_mode = star_strand_mode,
            count_exons = count_exons,
            soloMultiMappers = soloMultiMappers
    }

    # Call the ATAC workflow
    call atac.ATAC as Atac {
        input:
            read1_fastq_gzipped = atac_r1_fastq,
            read2_fastq_gzipped = atac_r2_fastq,
            read3_fastq_gzipped = atac_r3_fastq,
            input_id = input_id + "_atac",
            tar_bwa_reference = tar_bwa_reference,
            annotations_gtf = annotations_gtf,
            chrom_sizes = chrom_sizes,
            whitelist = atac_whitelist,
            adapter_seq_read1 = adapter_seq_read1,
            adapter_seq_read3 = adapter_seq_read3
    }
    call H5adUtils.JoinMultiomeBarcodes as JoinBarcodes {
        input:
            atac_h5ad = Atac.snap_metrics,
            gex_h5ad = Optimus.h5ad_output_file,
            gex_whitelist = gex_whitelist,
            atac_whitelist = atac_whitelist,
            atac_fragment = Atac.fragment_file
    }

    # Call CellBender
    if (run_cellbender) {
        call CellBender.run_cellbender_remove_background_gpu as CellBender {
            input:
                sample_name = input_id,
                input_file_unfiltered = Optimus.h5ad_output_file,
                hardware_boot_disk_size_GB = 20,
                hardware_cpu_count = 4,
                hardware_disk_size_GB = 50,
                hardware_gpu_type = "nvidia-tesla-t4",
                hardware_memory_GB = 32,
                hardware_preemptible_tries = 2,
                hardware_zones = "us-central1-a us-central1-c",
                nvidia_driver_version = "470.82.01"

        }
    }

    meta {
        allowNestedInputs: true
    }

    output {
        
        String multiome_pipeline_version_out = pipeline_version

        # atac outputs
        File bam_aligned_output_atac = Atac.bam_aligned_output
        File fragment_file_atac = JoinBarcodes.atac_fragment_tsv
        File fragment_file_index = JoinBarcodes.atac_fragment_tsv_tbi
        File snap_metrics_atac = JoinBarcodes.atac_h5ad_file

        # optimus outputs
        File genomic_reference_version_gex = Optimus.genomic_reference_version
        File bam_gex = Optimus.bam
        File matrix_gex = Optimus.matrix
        File matrix_row_index_gex = Optimus.matrix_row_index
        File matrix_col_index_gex = Optimus.matrix_col_index
        File cell_metrics_gex = Optimus.cell_metrics
        File gene_metrics_gex = Optimus.gene_metrics
        File? cell_calls_gex = Optimus.cell_calls
        File h5ad_output_file_gex = JoinBarcodes.gex_h5ad_file
        Array[File?] multimappers_EM_matrix = Optimus.multimappers_EM_matrix
        Array[File?] multimappers_Uniform_matrix = Optimus.multimappers_Uniform_matrix
        Array[File?] multimappers_Rescue_matrix = Optimus.multimappers_Rescue_matrix
        Array[File?] multimappers_PropUnique_matrix = Optimus.multimappers_PropUnique_matrix
        File? gex_aligner_metrics = Optimus.aligner_metrics
        File? library_metrics = Optimus.library_metrics

        # cellbender outputs
        File? cell_barcodes_csv = CellBender.cell_csv
        File? checkpoint_file = CellBender.ckpt_file
        Array[File]? h5_array = CellBender.h5_array
        Array[File]? html_report_array = CellBender.report_array
        File? log = CellBender.log
        Array[File]? metrics_csv_array = CellBender.metrics_array
        String? output_directory = CellBender.output_dir
        File? summary_pdf = CellBender.pdf
    }
}
