"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[3250],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(h,a(a({ref:t},c),{},{components:n})):i.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1825:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var i=n(3117),r=(n(7294),n(3905));const o={sidebar_position:2},a="Optimus v5.3.0 Methods",s={unversionedId:"Pipelines/Optimus_Pipeline/optimus.methods",id:"Pipelines/Optimus_Pipeline/optimus.methods",title:"Optimus v5.3.0 Methods",description:"Below we provide an example methods section for a publication, separated into single-cell or single-nucleus use cases. For the complete pipeline documentation, see the Optimus Overview.",source:"@site/docs/Pipelines/Optimus_Pipeline/optimus.methods.md",sourceDirName:"Pipelines/Optimus_Pipeline",slug:"/Pipelines/Optimus_Pipeline/optimus.methods",permalink:"/warp/docs/Pipelines/Optimus_Pipeline/optimus.methods",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/Optimus_Pipeline/optimus.methods.md",tags:[],version:"current",lastUpdatedBy:"ekiernan",lastUpdatedAt:1693505859,formattedLastUpdatedAt:"Aug 31, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Optimus Overview",permalink:"/warp/docs/Pipelines/Optimus_Pipeline/README"},next:{title:"What tags are included in an Optimus BAM file?",permalink:"/warp/docs/Pipelines/Optimus_Pipeline/Bam_tags"}},l={},p=[{value:"Single-cell (sc_rna mode)",id:"single-cell-sc_rna-mode",level:2},{value:"Single-nucleus (sn_rna mode)",id:"single-nucleus-sn_rna-mode",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"optimus-v530-methods"},"Optimus v5.3.0 Methods"),(0,r.kt)("p",null,"Below we provide an example methods section for a publication, separated into single-cell or single-nucleus use cases. For the complete pipeline documentation, see the ",(0,r.kt)("a",{parentName:"p",href:"/warp/docs/Pipelines/Optimus_Pipeline/README"},"Optimus Overview"),"."),(0,r.kt)("h1",{id:"methods"},"Methods"),(0,r.kt)("h2",{id:"single-cell-sc_rna-mode"},"Single-cell (sc_rna mode)"),(0,r.kt)("p",null,"Data preprocessing and count matrix construction were performed using the Optimus v5.3.0 pipeline (RRID:SCR_018908). Briefly, FASTQ files were partitioned by barcodes using sctools v0.3.13. The files were then trimmed, aligned, UMI-corrected against the 10x Genomics barcodes whitelist, and converted to a raw count matrix using STAR v2.7.9a. CB correction was performed using the  ",(0,r.kt)("inlineCode",{parentName:"p"},"--soloCBmatchWLtype 1MM_multi_Nbase_pseudocounts")," parameter which allowed for multiple matches in the whitelist with 1 mismatched base, used posterior probability calculation to choose one of the matches, added pseudocounts of 1 to all whitelist barcodes, and allowed multi-matching of CBs with N-bases to the whitelist.  "),(0,r.kt)("p",null,"Reads were trimmed using the solo parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"--clipAdapterType CellRanger4")," and  ",(0,r.kt)("inlineCode",{parentName:"p"},"--outFilterScoreMin 30"),' which matches read trimming performed by CellRanger4. Reads were then aligned to GENCODE mouse (M21) or human (V27) references in unstranded mode. Genes were annotated using the STAR "Gene" COUNTING_MODE and UMIs were corrected with the ',(0,r.kt)("inlineCode",{parentName:"p"},"--soloUMIdedup 1MM_Directional_UMItoolsdirectional")," parameter, which uses a directional correction method. The resulting BAM was then used for cell and gene metric correction using the sctools v0.3.13 TagSortBam tool. The STAR TSV outputs for gene counts, features, and barcodes were converted to numpy arrays for downstream empty droplet detection using DropletUtils v1.2.1 emptyDrops with the parameters\n",(0,r.kt)("inlineCode",{parentName:"p"},"--fdr-cutoff 0.01 --emptydrops-niters 10000 --min-molecules 100 --emptydrops-lower 100"),"."),(0,r.kt)("p",null,"All cell and gene metrics (alignment, mitochondrial, and other QC metrics), count matrices, and emptyDrops results were aggregated into a final Loom-formatted cell-by-gene matrix. The final outputs included the unfiltered Loom and unfiltered (but tagged) BAM file."),(0,r.kt)("p",null,"An example of the pipeline and outputs is available on the Terra HCA Optimus Pipeline Featured Workspace (",(0,r.kt)("a",{parentName:"p",href:"https://app.terra.bio/#workspaces/featured-workspaces-hca/HCA_Optimus_Pipeline"},"https://app.terra.bio/#workspaces/featured-workspaces-hca/HCA_Optimus_Pipeline"),"), and an additional pipeline overview is available in ",(0,r.kt)("a",{parentName:"p",href:"https://broadinstitute.github.io/warp/docs/Pipelines/Optimus_Pipeline/README"},"WARP documentation"),". Examples of genomic references, whitelists, and other inputs are available in the WARP repository (see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/master/pipelines/skylab/optimus/example_inputs"},"example inputs"),")."),(0,r.kt)("h2",{id:"single-nucleus-sn_rna-mode"},"Single-nucleus (sn_rna mode)"),(0,r.kt)("p",null,"Data preprocessing and count matrix construction were performed using the Optimus v5.3.0 pipeline (RRID:SCR_018908). Briefly, FASTQ files were partitioned by barcodes using sctools v0.3.13. The files were then trimmed, aligned, UMI-corrected against the 10x Genomics barcodes whitelist, and converted to a raw count matrix using STAR v2.7.9a. CB correction was performed using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--soloCBmatchWLtype 1MM_multi_Nbase_pseudocounts")," parameter which allowed for multiple matches in the whitelist with 1 mismatched base, used posterior probability calculation to choose one of the matches, added pseudocounts of 1 to all whitelist barcodes, and allowed multi-matching of CBs with N-bases to the whitelist.  "),(0,r.kt)("p",null,"Reads were trimmed using the solo parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"--clipAdapterType CellRanger4")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--outFilterScoreMin 30"),' which matches read trimming performed by CellRanger4. Reads were then aligned to GENCODE mouse (M21) or human (V27) references in unstranded mode. Genes were annotated using the STAR "GeneFull" COUNTING_MODE and UMIs were corrected with the ',(0,r.kt)("inlineCode",{parentName:"p"},"--soloUMIdedup 1MM_Directional_UMItoolsdirectional")," parameter, which uses a directional correction method. The resulting BAM was then used for cell and gene metric correction using the sctools v0.3.13 TagSortBam tool. The STAR TSV outputs for gene counts, features, and barcodes were converted to numpy arrays for downstream Loom conversion. "),(0,r.kt)("p",null,"All cell and gene metrics (alignment, mitochondrial, and other QC metrics) and count matrices were aggregated into a final Loom-formatted cell-by-gene matrix. The final outputs included the unfiltered Loom and unfiltered (but tagged) BAM file."),(0,r.kt)("p",null,"An example of the pipeline and outputs is available on the ",(0,r.kt)("a",{parentName:"p",href:"https://app.terra.bio/#workspaces/featured-workspaces-hca/HCA_Optimus_Pipeline"},"Terra HCA Optimus Pipeline Featured Workspace"),", and an additional pipeline overview is available in ",(0,r.kt)("a",{parentName:"p",href:"https://broadinstitute.github.io/warp/docs/Pipelines/Optimus_Pipeline/README"},"WARP documentation"),". Examples of genomic references, whitelists, and other inputs are available in the WARP repository (see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/master/pipelines/skylab/optimus/example_inputs"},"example inputs"),"."))}d.isMDXComponent=!0}}]);