(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./docz/examples/16-example-others.mdx":function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return c});var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),l=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),m=t("./node_modules/react/index.js"),u=t.n(m),d=t("./node_modules/@mdx-js/tag/dist/index.js"),p=t("./docz/utils/Playground.jsx"),b=t("./src/material-table.js"),c=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(l.a)(this,Object(o.a)(a).call(this,e))).layout=null,t}return Object(s.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.components,t=Object(r.a)(e,["components"]);return u.a.createElement(d.MDXTag,{name:"wrapper",components:a},u.a.createElement(d.MDXTag,{name:"h1",components:a,props:{id:"other-examples"}},"Other Examples"),u.a.createElement(d.MDXTag,{name:"h2",components:a,props:{id:"empty-datasource-example"}},"Empty DataSource Example"),u.a.createElement(p.a,{__position:0,__code:"<MaterialTable\n  columns={[\n    { title: 'Name', field: 'name' },\n    { title: 'Surname', field: 'surname' },\n    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Birth Place',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[]}\n  title=\"Empty DataSource Example\"\n  options={{\n    paging: true,\n    showEmptyDataSourceMessage: true,\n  }}\n  localization={{\n    body: {\n      emptyDataSourceMessage: 'No records to display',\n    },\n  }}\n/>",__scope:{props:this?this.props:t,Playground:p.a,MaterialTable:b.b},__codesandbox:"undefined"},u.a.createElement(b.b,{columns:[{title:"Name",field:"name"},{title:"Surname",field:"surname"},{title:"Birth Year",field:"birthYear",type:"numeric"},{title:"Birth Place",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[],title:"Empty DataSource Example",options:{paging:!0,showEmptyDataSourceMessage:!0},localization:{body:{emptyDataSourceMessage:"No records to display"}}})),u.a.createElement(d.MDXTag,{name:"h2",components:a,props:{id:"body-scroll-example"}},"Body Scroll Example"),u.a.createElement(p.a,{__position:1,__code:"<MaterialTable\n  columns={[\n    { title: 'Name', field: 'name' },\n    { title: 'Surname', field: 'surname' },\n    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Birth Place',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Zerya Bet\xfcl', surname: 'Baran', birthYear: 2017, birthCity: 34 },\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Zerya Bet\xfcl', surname: 'Baran', birthYear: 2017, birthCity: 34 },\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Zerya Bet\xfcl', surname: 'Baran', birthYear: 2017, birthCity: 34 },\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n  ]}\n  title=\"Body Scroll Example\"\n  options={{\n    paging: true,\n    maxBodyHeight: 204,\n  }}\n/>",__scope:{props:this?this.props:t,Playground:p.a,MaterialTable:b.b},__codesandbox:"undefined"},u.a.createElement(b.b,{columns:[{title:"Name",field:"name"},{title:"Surname",field:"surname"},{title:"Birth Year",field:"birthYear",type:"numeric"},{title:"Birth Place",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:2017,birthCity:34},{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:2017,birthCity:34},{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:2017,birthCity:34},{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63}],title:"Body Scroll Example",options:{paging:!0,maxBodyHeight:204}})))}}]),a}(u.a.Component);c.isMDXComponent=!0},"./docz/utils/Playground.jsx":function(e,a,t){"use strict";var r=t("./node_modules/docz/dist/index.esm.js"),n=t("./node_modules/codemirror/lib/codemirror.js");t.n(n).a.defaults.viewportMargin=1/0,a.a=r.c}}]);
//# sourceMappingURL=docz-examples-16-example-others.da28523193e2f1e8f30d.js.map