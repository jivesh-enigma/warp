"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[2827],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8511:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s}});var n=a(3117),r=(a(7294),a(3905));const l={sidebar_position:1,slug:"/Pipelines/ATAC/README"},i="ATAC Overview",o={unversionedId:"Pipelines/ATAC/README",id:"Pipelines/ATAC/README",title:"ATAC Overview",description:"| Pipeline Version | Date Updated | Documentation Author | Questions or Feedback |",source:"@site/docs/Pipelines/ATAC/README.md",sourceDirName:"Pipelines/ATAC",slug:"/Pipelines/ATAC/README",permalink:"/warp/docs/Pipelines/ATAC/README",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/ATAC/README.md",tags:[],version:"current",lastUpdatedBy:"Kaylee Mathews",lastUpdatedAt:1698410772,formattedLastUpdatedAt:"Oct 27, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/Pipelines/ATAC/README"},sidebar:"docsSidebar",previous:{title:"Version and Release Pipelines",permalink:"/warp/docs/About_WARP/VersionAndReleasePipelines"},next:{title:"ATAC Count Matrix Overview",permalink:"/warp/docs/Pipelines/ATAC/count-matrix-overview"}},p={},s=[{value:"Introduction to the ATAC workflow",id:"introduction-to-the-atac-workflow",level:2},{value:"Quickstart table",id:"quickstart-table",level:2},{value:"Set-up",id:"set-up",level:2},{value:"ATAC installation",id:"atac-installation",level:3},{value:"Input Variables",id:"input-variables",level:2},{value:"ATAC tasks and tools",id:"atac-tasks-and-tools",level:2},{value:"Output variables",id:"output-variables",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2}],d={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"atac-overview"},"ATAC Overview"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Pipeline Version"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Date Updated"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Documentation Author"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Questions or Feedback"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/releases"},"1.1.1")),(0,r.kt)("td",{parentName:"tr",align:"center"},"October, 2023"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Kaylee Mathews"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Please file GitHub issues in warp or contact ",(0,r.kt)("a",{parentName:"td",href:"mailto:warp-pipelines-help@broadinstitute.org"},"the WARP team"))))),(0,r.kt)("h2",{id:"introduction-to-the-atac-workflow"},"Introduction to the ATAC workflow"),(0,r.kt)("p",null,"ATAC is an open-source, cloud-optimized pipeline developed collaboration with members of the ",(0,r.kt)("a",{parentName:"p",href:"https://braininitiative.nih.gov/"},"BRAIN Initiative")," (BICCN and ",(0,r.kt)("a",{parentName:"p",href:"https://brainblog.nih.gov/brain-blog/brain-issues-suite-funding-opportunities-advance-brain-cell-atlases-through-centers"},"BICAN")," Sequencing Working Group) and ",(0,r.kt)("a",{parentName:"p",href:"https://nida.nih.gov/about-nida/organization/divisions/division-neuroscience-behavior-dnb/basic-research-hiv-substance-use-disorder/scorch-program"},"SCORCH")," (see ",(0,r.kt)("a",{parentName:"p",href:"#acknowledgements"},"Acknowledgements")," below). It supports the processing of 10x single-nucleus data generated with 10x Multiome ",(0,r.kt)("a",{parentName:"p",href:"https://www.10xgenomics.com/products/single-cell-multiome-atac-plus-gene-expression"},"ATAC-seq (Assay for Transposase-Accessible Chromatin)"),", a technique used in molecular biology to assess genome-wide chromatin accessibility. "),(0,r.kt)("p",null,"This workflow is the ATAC component of the ",(0,r.kt)("a",{parentName:"p",href:"../Multiome_Pipeline/README"},"Mutiome wrapper workflow"),". It corrects cell barcodes (CBs), aligns reads to the genome, and produces a fragment file as well as per barcode metrics. "),(0,r.kt)("h2",{id:"quickstart-table"},"Quickstart table"),(0,r.kt)("p",null,"The following table provides a quick glance at the ATAC pipeline features:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Pipeline features"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Source"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Assay type"),(0,r.kt)("td",{parentName:"tr",align:null},"10x single cell or single nucleus ATAC"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.10xgenomics.com"},"10x Genomics"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Overall workflow"),(0,r.kt)("td",{parentName:"tr",align:null},"Barcode correction, read alignment, and fragment quanitification"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Workflow language"),(0,r.kt)("td",{parentName:"tr",align:null},"WDL 1.0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/openwdl/wdl"},"openWDL"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Genomic Reference Sequence"),(0,r.kt)("td",{parentName:"tr",align:null},"GRCh38 human genome primary sequence"),(0,r.kt)("td",{parentName:"tr",align:null},"GENCODE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Aligner"),(0,r.kt)("td",{parentName:"tr",align:null},"BWA-mem"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://www.ncbi.nlm.nih.gov/pubmed/19451168"},"Li H. and Durbin R., 2009"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fragment quantification"),(0,r.kt)("td",{parentName:"tr",align:null},"SnapATAC2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pubmed.ncbi.nlm.nih.gov/34774128/"},"Zhang, K. et al., 2021"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data input file format"),(0,r.kt)("td",{parentName:"tr",align:null},"File format in which sequencing data is provided"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/38/6/1767/3112533"},"FASTQ"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data output file format"),(0,r.kt)("td",{parentName:"tr",align:null},"File formats in which ATAC output is provided"),(0,r.kt)("td",{parentName:"tr",align:null},"TSV, h5ad, BAM")))),(0,r.kt)("h2",{id:"set-up"},"Set-up"),(0,r.kt)("h3",{id:"atac-installation"},"ATAC installation"),(0,r.kt)("p",null,'To download the latest ATAC release, see the release tags prefixed with "Multiome" on the WARP ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/releases"},"releases page"),". All ATAC pipeline releases are documented in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/skylab/multiome/atac.changelog.md"},"ATAC changelog"),". "),(0,r.kt)("p",null,"To discover and search releases, use the WARP command-line tool ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/master/wreleaser"},"Wreleaser"),"."),(0,r.kt)("p",null,"ATAC can be deployed using ",(0,r.kt)("a",{parentName:"p",href:"https://cromwell.readthedocs.io/en/stable/"},"Cromwell"),", a GA4GH compliant, flexible workflow management system that supports multiple computing platforms. The workflow can also be run in ",(0,r.kt)("a",{parentName:"p",href:"https://app.terra.bio"},"Terra"),", a cloud-based analysis platform. "),(0,r.kt)("h2",{id:"input-variables"},"Input Variables"),(0,r.kt)("p",null,"The following describes the inputs of the ATAC workflow. For more details on how default inputs are set for the Multiome workflow, see the ",(0,r.kt)("a",{parentName:"p",href:"../Multiome_Pipeline/README"},"Multiome overview"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"read1_fastq_gzipped"),(0,r.kt)("td",{parentName:"tr",align:null},"Fastq inputs (array of compressed read 1 FASTQ files).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"read2_fastq_gzipped"),(0,r.kt)("td",{parentName:"tr",align:null},"Fastq inputs (array of compressed read 2 FASTQ files containing cellular barcodes).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"read3_fastq_gzipped"),(0,r.kt)("td",{parentName:"tr",align:null},"Fastq inputs (array of compressed read 3 FASTQ files).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output_base_name"),(0,r.kt)("td",{parentName:"tr",align:null},"Output prefix/base name for all intermediate files and pipeline outputs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tar_bwa_reference"),(0,r.kt)("td",{parentName:"tr",align:null},"BWA reference (tar file containing reference fasta and corresponding files).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"atac_gtf"),(0,r.kt)("td",{parentName:"tr",align:null},"CreateFragmentFile input variable: GTF file for SnapATAC2 to calculate TSS sites of fragment file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chrom_sizes"),(0,r.kt)("td",{parentName:"tr",align:null},"CreateFragmentFile input variable: Text file containing chrom_sizes for genome build (i.e., hg38)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"whitelist"),(0,r.kt)("td",{parentName:"tr",align:null},"Whitelist file for ATAC cellular barcodes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"adapter_seq_read1"),(0,r.kt)("td",{parentName:"tr",align:null},"TrimAdapters input: Sequence adapter for read 1 fastq.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"adapter_seq_read3"),(0,r.kt)("td",{parentName:"tr",align:null},"TrimAdapters input: Sequence adapter for read 3 fastq.")))),(0,r.kt)("h2",{id:"atac-tasks-and-tools"},"ATAC tasks and tools"),(0,r.kt)("p",null,"Overall, the ATAC workflow:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Corrects CBs and partitions FASTQs by CB."),(0,r.kt)("li",{parentName:"ol"},"Aligns reads."),(0,r.kt)("li",{parentName:"ol"},"Merges aligned BAMs"),(0,r.kt)("li",{parentName:"ol"},"Generates a fragment file"),(0,r.kt)("li",{parentName:"ol"},"Calculates per cell barcode fragment metrics.")),(0,r.kt)("p",null,"The tools each ATAC task employs are detailed in the table below. "),(0,r.kt)("p",null,"To see specific tool parameters, select the task WDL link in the table; then view the ",(0,r.kt)("inlineCode",{parentName:"p"},"command {}")," section of the task in the WDL script. To view or use the exact tool software, see the task's Docker image which is specified in the task WDL ",(0,r.kt)("inlineCode",{parentName:"p"},"# runtime values")," section as ",(0,r.kt)("inlineCode",{parentName:"p"},"String docker ="),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Task name and WDL link"),(0,r.kt)("th",{parentName:"tr",align:null},"Tool"),(0,r.kt)("th",{parentName:"tr",align:null},"Software"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/blob/develop/tasks/skylab/FastqProcessing.wdl"},"FastqProcessing as SplitFastq")),(0,r.kt)("td",{parentName:"tr",align:null},"fastqprocess"),(0,r.kt)("td",{parentName:"tr",align:null},"custom"),(0,r.kt)("td",{parentName:"tr",align:null},"Dynamically selects the correct barcode orientation, corrects cell barcodes and splits FASTQs into 30 GB FASTQs that are grouped by cell barcode with each read having the corrected (CB) and raw barcode (CR) in the read name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/skylab/multiome/atac.wdl"},"TrimAdapters")),(0,r.kt)("td",{parentName:"tr",align:null},"Cutadapt v4.4"),(0,r.kt)("td",{parentName:"tr",align:null},"cutadapt"),(0,r.kt)("td",{parentName:"tr",align:null},"Trims adaptor sequences.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/skylab/multiome/atac.wdl"},"BWAPairedEndAlignment")),(0,r.kt)("td",{parentName:"tr",align:null},"bwa-mem2"),(0,r.kt)("td",{parentName:"tr",align:null},"mem"),(0,r.kt)("td",{parentName:"tr",align:null},"Aligns reads from each set of partitioned FASTQ files to the genome and outputs a BAM with ATAC barcodes in the CB:Z tag.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/blob/develop/tasks/skylab/MergeSortBam.wdl"},"Merge.MergeSortBamFiles as MergeBam")),(0,r.kt)("td",{parentName:"tr",align:null},"MergeSamFiles"),(0,r.kt)("td",{parentName:"tr",align:null},"Picard"),(0,r.kt)("td",{parentName:"tr",align:null},"Merges each BAM into a final aligned BAM with corrected cell barcodes in the CB tag.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/skylab/multiome/atac.wdl"},"CreateFragmentFile")),(0,r.kt)("td",{parentName:"tr",align:null},"make_fragment_file, import_data"),(0,r.kt)("td",{parentName:"tr",align:null},"SnapATAC2"),(0,r.kt)("td",{parentName:"tr",align:null},"Generates a fragment file from the final aligned BAM and outputs per barcode quality metrics in h5ad. A detailed list of these metrics is found in the ",(0,r.kt)("a",{parentName:"td",href:"/warp/docs/Pipelines/ATAC/count-matrix-overview"},"ATAC Count Matrix Overview"),".")))),(0,r.kt)("h2",{id:"output-variables"},"Output variables"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Output variable name"),(0,r.kt)("th",{parentName:"tr",align:null},"Filename, if applicable"),(0,r.kt)("th",{parentName:"tr",align:null},"Output format and description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bam_aligned_output"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<input_id>"),".bam"),(0,r.kt)("td",{parentName:"tr",align:null},"BAM containing aligned reads from ATAC workflow.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fragment_file"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<input_id>"),".fragments.tsv"),(0,r.kt)("td",{parentName:"tr",align:null},"TSV containing fragment start and stop coordinates per barcode.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"snap_metrics"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<input_id"),".metrics.h5ad"),(0,r.kt)("td",{parentName:"tr",align:null},"h5ad (Anndata) containing per barcode metrics from ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/kaizhang/SnapATAC2"},"SnapATAC2"),". A detailed list of these metrics is found in the ",(0,r.kt)("a",{parentName:"td",href:"/warp/docs/Pipelines/ATAC/count-matrix-overview"},"ATAC Count Matrix Overview"),".")))),(0,r.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,r.kt)("p",null,"We are immensely grateful to the members of the BRAIN Initiative (BICAN Sequencing Working Group) and SCORCH for their invaluable and exceptional contributions to this pipeline. Our heartfelt appreciation goes to Alex Dobin, Aparna Bhaduri, Alec Wysoker, Anish Chakka, Brian Herb, Daofeng Li, Fenna Krienen, Guo-Long Zuo, Jeff Goldy, Kai Zhang, Khalid Shakir, Bo Li, Mariano Gabitto, Michael DeBerardine, Mengyi Song, Melissa Goldman, Nelson Johansen, James Nemesh, and Theresa Hodges for their unwavering dedication and remarkable efforts."))}u.isMDXComponent=!0}}]);