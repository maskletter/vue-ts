
/**
  定义typescript应用的文件类型
*/


declare module "*.xml" {
  const content: any;
  export default content;
}
declare module "*.json" {
  const content: any;
  export default content;
}
declare module "*.png" {
  const content: any;
  export default content;
}
declare module "*.jpg" {
  const content: any;
  export default content;
}
declare module "*.scss" {
  const content: any;
  export default content;
}
declare module "*.css" {
  const content: any;
  export default content;
}
declare module "*.less" {
  const content: any;
  export default content;
}
declare module "*.html" {
  const content: any;
  export default content;
}
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare var Vue;