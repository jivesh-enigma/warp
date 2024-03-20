version 1.0

import "../../../../structs/imputation/ImputationStructs.wdl" as structs
import "../../../../tasks/broad/ImputationTasks.wdl" as tasks
import "../../../../tasks/broad/Utilities.wdl" as utils

workflow Imputation {

  String pipeline_version = "1.1.12"

  input {
    Array[File] single_sample_vcfs
    Array[File] single_sample_vcf_indices
    Int merge_ssvcf_mem_mb = 9000 # the memory allocation for MergeSingleSampleVcfs (in mb)
  }

  call tasks.MergeSingleSampleVcfs {
    input:
      input_vcfs = select_first([single_sample_vcfs]),
      input_vcf_indices = select_first([single_sample_vcf_indices]),
      output_vcf_basename = "merged_input_samples",
      memory_mb = merge_ssvcf_mem_mb
  }


  meta {
    allowNestedInputs: true
  }

}
