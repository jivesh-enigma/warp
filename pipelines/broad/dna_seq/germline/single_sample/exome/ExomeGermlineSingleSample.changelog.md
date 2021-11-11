# 3.0.4
2022-02-02 (Date of Last Commit)

* Changed dragmap base image from Centos to RockyLinux to comply with trivy scans

# 3.0.3
2022-02-01 (Date of Last Commit)

* Increased the disk space in Reblock task
* Increased the disk space in CalibrateDragstrModel task
* Addressed memory usage in CheckFingerprint task to allow sufficient headroom for the VM

# 3.0.2
2022-01-14 (Date of Last Commit)

* Refactor to move CheckFingerprint functionality into new task

# 3.0.1
2021-12-09
* Updated the base image for the Dragmap docker image
* Updated broken dependency in VerifyBamID docker image

# 3.0.0
2021-11-15

* Added an optional step to reblock gVCFs, this step is included by default
    * The ExomeGermlineSingleSample pipeline now outputs reblocked gVCFs by default. To skip reblocking, add '\"ExomeGermlineSingleSample.BamToGvcf.skip_reblocking\": true' to the inputs
* Added WGS plumbing tests for dragen_maximum_quality_mode and dragen_functional_equivalence_mode
* Moved Dragmap docker to WARP and updated to follow repo's best practices
* Added Xmx flag (maximum heap size) to all tasks with java commands
* Added option to allow empty ref_alt file for running BWA mem with masked reference
* Added plumbing input JSON for masked reference
* Updated the SumFloats task used in UnmappedBamToAlignedBam.wdl to use python3 instead of python2

# 2.6.0
2021-10-18
* Updated GATK to v4.2.2.0 for variant calling. In accordance with known improvements in GATK 4.1.9.0 and 4.2.0.0, sensitivity to phased variants is improved in a small number of cases and genotypes are more accurate in a very small number of cases involving indels and spanning deletions
* Added optional BQSR outputs

# 2.5.0
2021-10-06

* Updated VerifyBamID to use AppSec base image
* Changed GoTC image to Samtools specific image in CramToUnmappedBams and Utilities
* Changed GoTC image to GATK specific image in GermlineVariantDiscovery
* Changed GoTC image to SAMTOOLS/PICARD/BWA specific image in Alignment

# 2.4.7
2021-09-22

* Updated Utilities.wdl task definitions to include a new ErrorWithMessage task that is NOT used in the ExomeGermlineSingleSample pipeline.

# 2.4.6
2021-08-02

* Increased the version number to make new release tag for Dockstore 

# 2.4.5
2021-06-22

* Removed duplicate MarkDuplicatesSpark task from BamProcessing
* Removed duplicate Docker image from CheckPreValidation task in QC

# 2.4.4
2021-06-01 

* Removed deprecated parameter PAIRED_RUN from MergeBamAlignment

# 2.4.3
2021-03-17

* Promoted VariantCalling to be a top-level workflow

# 2.4.2
2021-02-22

* Added SORTING_COLLECTION_SIZE_RATIO as an optional task input to MarkDuplicates

# 2.4.1
2020-12-21

* Passed an input bam index to several subworkflows, so the pipeline passes on singularity for sharded BQSR

# 2.4.0
2021-01-06

* Change bait_set_name to type String, so its type is consistent with its subworkflow and plumbing inputs json

# 2.3.0
2020-12-16

* Fixed error in relative import statement in Alignment subworkflow.
* Fixed syntax bug in Alignment task SamToFastqAndBwaMemAndMba

# 2.2.0
2020-10-20

* Updated GATK docker image for all tasks to [GATK 4.1.8.0](https://github.com/broadinstitute/gatk/releases/tag/4.1.8.0).
    * Numerous bug fixes and improvements
* Updated Picard docker image for all tasks to [2.23.8](https://github.com/broadinstitute/picard/releases/tag/2.23.8).
* Updated samtools to version [1.11](https://github.com/samtools/samtools/releases/tag/1.11).  Primarily for improved compression of cram files.

# 2.1.0
2020-08-18

* Added 'allowNestedInputs: true' metadata parameter to wdl to support Cromwell version 52

# 2.0.1
2020-07-15

* Remove GetBWAVersion as a task and moved it to SamToFastqAndBwaMemAndMba

# 2.0 
2020-05-13

### Breaking changes to the structure of pipeline inputs. 
* Changes to the inputs included with the dna seq single sample references struct:
    * Removed 'fingerprint_genotypes_file' and 'fingerprint_genotypes_index' from bundle and made these optional pipeline inputs
    * Removed 'haplotype_scatter_count' and 'break_bands_at_multiples_of' from bundle and added these to a separate 'VariantCallingScatterSettings' struct
    * Added 'haplotype_database_file' to the references bundle as a non-optional file
#### Additional changes
* Renamed GermlineSingleSampleReferences to DNASeqSingleSampleReferences
* Updated shared tasks to support the new TargetedSomaticSingleSample pipeline

# 1.4
2020-03-05

* Added 'additional_disk' parameter to accommodate larger samples that have steps that run out of disk.

# 1.3
2019-12-03

* Modified the ExomeGermlineSingleSample pipeline to use an up-to-date set of contamination resource files for VerifyBamId.  Further, these contamination resource files are subsetted by the target interval list.
* Removed unused import statements from ExomeGermlineSingleSample.wdl

# 1.2
Adjusted memory parameters to avoid Google's new e2 instances because there are not enough machines to satisfy our production use case.

# 1.1
This is an update to the ExomeGermlineSingleSample pipeline. We are jumping forward several versions of Picard, from version [2.18.27](https://github.com/broadinstitute/picard/releases/tag/2.18.27) to [2.20.4](https://github.com/broadinstitute/picard/releases/tag/2.20.4)
## Changes to Expect
For Exomes we have observed the following changes in out test data:

### Crams
[OA](https://github.com/broadinstitute/picard/commit/fbb06096) tags have been added to Crams, PA tags are changed to OA.

### Metrics
- Alignment Summary Metrics and Readgroup Alignment Summary Metrics
  - Minor changes in the values of the `PCT_ADAPTER` metric.
- Duplicate Metrics
  - Minor changes in the values of `READ_PAIR_OPTICAL_DUPLICATES `and `ESTIMATED_LIBRARY_SIZE`.
  - New values and additional bins included in the histogram.
- Hybrid Selection Metrics
  - New metrics, `MIN_TARGET_COVERAGE`, `PCT_EXC_ADAPTER`, and `PF_BASES`, are now delivered. 
  - Small changes in values of the `ZERO_CVG_TARGETS_PCT ` metric.

# 1.0
Initial release of the ExomeGermlineSingleSample pipeline