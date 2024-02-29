"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[4063],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3221:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var i=n(3117),r=(n(7294),n(3905));const a={sidebar_position:2},o="Smart-seq2 Single Nucleus Multi-Sample v1.3.0 Publication Methods",l={unversionedId:"Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/multi_snss2.methods",id:"Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/multi_snss2.methods",title:"Smart-seq2 Single Nucleus Multi-Sample v1.3.0 Publication Methods",description:"Below we provide an example methods section for a publication. For the complete pipeline documentation, see the Smart-seq2 Single Nucleus Multi-Sample Overview.",source:"@site/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/multi_snss2.methods.md",sourceDirName:"Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline",slug:"/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/multi_snss2.methods",permalink:"/warp/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/multi_snss2.methods",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/multi_snss2.methods.md",tags:[],version:"current",lastUpdatedBy:"Kaylee Mathews",lastUpdatedAt:1709238566,formattedLastUpdatedAt:"Feb 29, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Smart-seq2 Single Nucleus Multi-Sample Overview",permalink:"/warp/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/README"},next:{title:"Smart-seq2 Single Nucleus Multi-Sample Count Matrix Overview",permalink:"/warp/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/count-matrix-overview"}},s={},u=[{value:"Methods",id:"methods",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smart-seq2-single-nucleus-multi-sample-v130-publication-methods"},"Smart-seq2 Single Nucleus Multi-Sample v1.3.0 Publication Methods"),(0,r.kt)("p",null,"Below we provide an example methods section for a publication. For the complete pipeline documentation, see the ",(0,r.kt)("a",{parentName:"p",href:"/warp/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/README"},"Smart-seq2 Single Nucleus Multi-Sample Overview"),"."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("p",null,"Data preprocessing and count matrix construction for a batch (or plate) were performed using the Smart-seq2 Single Nucleus Multi-Sample v1.3.0 Pipeline (RRID:SCR_021312) as well as Picard v.2.26.10 with default tool parameters unless otherwise specified. Genomic references are publicly available in the ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/storage/browser/gcp-public-data--broad-references/mm10/v0/single_nucleus?pageState=(%22StorageObjectListTable%22:(%22f%22:%22%255B%255D%22))&prefix=&forceOnObjectsSortingFiltering=false"},"Broad References")," Google Bucket and are also listed in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_single_nucleus_multisample/mouse_example.json"},"example workflow configuration")," in GitHub. "),(0,r.kt)("p",null,"For each nucleus in the batch, paired-end FASTQ files were first trimmed to remove adapters using the fastq-mcf tool with a subsampling parameter of 200,000 reads. The trimmed FASTQ files were then aligned to the GENCODE GRCm38 mouse genome using STAR v.2.7.10a. To count the number of reads per gene, but not isoforms, the quantMode parameter was set to GeneCounts. Multi-mapped reads, and optical and PCR duplicates, were removed from the resulting aligned BAM using the Picard MarkDuplicates tool with REMOVE_DUPLICATES = true. Metrics were collected on the deduplicated BAM using Picard CollectMultipleMetrics with VALIDATION_STRINGENCY =SILENT."),(0,r.kt)("p",null,"Intronic and exonic alignments were counted using the featureCounts v2.0.2 tool and a custom GTF that was modified from the GENCODE M23 GTF to include intronic annotations. Alignments that overlapped an annotated intron, or overlapped a single exon/intron junction, by a minimum of 3 bp were counted once as an intron. "),(0,r.kt)("p",null,"To count exonic alignments, a custom python script was used to create an intermediate BAM in which all alignments that cross only one intron-exon junction were removed, leaving alignments that overlap exons as well as those that overlap more than one intron-exon junction. FeatureCounts was applied to the intermediate BAM to count exonic alignments that had a 1 bp minimum overlap with an annotated exon or crossed two or more intron-exon junctions, which could be indicative of spliced RNA. "),(0,r.kt)("p",null,"A custom python script was then used to combine raw intronic and exonic counts as well Picard metrics into a final cell-by-gene Loom matrix."),(0,r.kt)("p",null,"An example of the pipeline and outputs can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://app.terra.bio/#workspaces/warp-pipelines/Smart-seq2_Single_Nucleus_Muti-Sample"},"Terra")," and additional documentation can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/warp/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/README"},"Smart-seq2 Single Nucleus Multi-Sample Overview"),"."))}m.isMDXComponent=!0}}]);