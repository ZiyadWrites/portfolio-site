"use strict";(self.webpackChunkportfolio_site=self.webpackChunkportfolio_site||[]).push([[3956],{183:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"technical-writing-portfolio/technical-summaries/madds-architectural-tech-summary","title":"Technical Summary","description":"This document provides a technical summary of an architectural drawing I developed for a job application. The assignment required a concise summary, limited to one page. To maintain confidentiality, the drawing itself has been omitted to protect the client\'s information.","source":"@site/docs/technical-writing-portfolio/technical-summaries/madds-architectural-tech-summary.md","sourceDirName":"technical-writing-portfolio/technical-summaries","slug":"/technical-writing-portfolio/technical-summaries/madds-architectural-tech-summary","permalink":"/portfolio-site/docs/technical-writing-portfolio/technical-summaries/madds-architectural-tech-summary","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"technicalWritingPortfolioSidebar","previous":{"title":"Why Your Smart Contract Functions Aren\'t Visible on Etherscan","permalink":"/portfolio-site/docs/technical-writing-portfolio/user-guide-samples/smartcontract-visibility-on-etherscan"},"next":{"title":"Connect API","permalink":"/portfolio-site/docs/technical-writing-portfolio/api-documentation/connect-api"}}');var a=i(4848),n=i(8453);const o={sidebar_position:3},s="Technical Summary",c={},l=[{value:"Master Delivery Dataset (MADDS) architecture",id:"master-delivery-dataset-madds-architecture",level:2},{value:"1. Sources",id:"1-sources",level:2},{value:"2. Extraction",id:"2-extraction",level:2},{value:"3. Transformation",id:"3-transformation",level:2},{value:"4. Loading",id:"4-loading",level:2},{value:"5. Querying",id:"5-querying",level:2}];function d(e){const t={admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"technical-summary",children:"Technical Summary"})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"This document provides a technical summary of an architectural drawing I developed for a job application. The assignment required a concise summary, limited to one page. To maintain confidentiality, the drawing itself has been omitted to protect the client's information."})}),"\n",(0,a.jsx)(t.h2,{id:"master-delivery-dataset-madds-architecture",children:"Master Delivery Dataset (MADDS) architecture"}),"\n",(0,a.jsx)(t.p,{children:"The Master Delivery Dataset (MADDS) processes, transforms and stores advertising delivery data and metadata from multiple sources. It follows a structured data pipeline with five key stages: Sources, Extraction, Transformation, Loading and Querying."}),"\n",(0,a.jsx)(t.h2,{id:"1-sources",children:"1. Sources"}),"\n",(0,a.jsx)(t.p,{children:"The system collects data from two main source categories:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Event sources (Ad servers): DFP Delivery, Haymaker Delivery, Adswizz Delivery"}),"\n",(0,a.jsx)(t.li,{children:"Metadata Sources: Slingshot Order and Taxonomy"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"2-extraction",children:"2. Extraction"}),"\n",(0,a.jsx)(t.p,{children:"The Extraction layer retrieves data from the Event and Metadata sources for further processing."}),"\n",(0,a.jsx)(t.h2,{id:"3-transformation",children:"3. Transformation"}),"\n",(0,a.jsx)(t.p,{children:"The system runs daily transformation jobs to clean, structure and enrich the data, ensuring the latest information is available for analysis."}),"\n",(0,a.jsx)(t.h2,{id:"4-loading",children:"4. Loading"}),"\n",(0,a.jsx)(t.p,{children:"The standardized data is processed and stored in the HDFS (Hadoop distributed file system), where it becomes part of the data warehouse."}),"\n",(0,a.jsx)(t.h2,{id:"5-querying",children:"5. Querying"}),"\n",(0,a.jsx)(t.p,{children:"The data warehouse supports querying using Spark, Hive, MapReduce and Presto for analytics and reporting."})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>s});var r=i(6540);const a={},n=r.createContext(a);function o(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);