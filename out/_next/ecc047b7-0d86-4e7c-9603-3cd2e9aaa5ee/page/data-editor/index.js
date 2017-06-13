
          window.__NEXT_REGISTER_PAGE('/data-editor', function() {
            var comp = module.exports=webpackJsonp([6],{104:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(1),i=l(s),n=a(67),r=l(n),d=a(96),m=l(d),c=a(38),o=l(c),f=[{name:"Matthew Whittemore",title:"(enginnering)"},{name:"Saman Bemel-Benrud",title:"(enginnering)"},{name:"David Clark",title:"(enginnering)"},{name:"Tom MacWright",title:"(enginnering)"}],u=[{imageSource:"../static/img/de_topbar.png",title:"Different layer states",description:"Clear, distinguishable states for nested, selected, and hidden layers."},{imageSource:"../static/img/de_topbar.png",title:"Different layer states",description:"Clear, distinguishable states for nested, selected, and hidden layers."},{imageSource:"../static/img/de_type.png",title:"Property categories",description:"Clear, distinguishable states for nested, selected, and hidden layers."}];t.default=function(){return i.default.createElement("div",null,i.default.createElement(r.default,null),i.default.createElement("div",{className:"bg-near-white overflow-hidden bt bw2 lh-title"},i.default.createElement("div",{className:"mw-limiter pv3 ph6-l center ph4"},i.default.createElement(o.default,{href:"/"},i.default.createElement("a",{className:"f4 black no-underline mt3 dib"},"Maya Gao")),i.default.createElement("div",{className:"mt6-l mt2 center"},i.default.createElement("div",{className:"cb cf"},i.default.createElement("div",{className:"w-40-l w-100 mb4 mt3 fl"},i.default.createElement("div",{className:"f5 o-40"},"Case Study"),i.default.createElement("div",{className:"f1 mb2 light"},"Dataset Editor"),i.default.createElement("div",{className:" mb3 fl"},i.default.createElement("div",{className:"f6 mt3 o-40"},"My Role"),i.default.createElement("div",{className:"f6 pt1 "},"UI design & dev"),i.default.createElement("div",{className:"f6 mt3 o-40"},"Release"),i.default.createElement("div",{className:"f6 pt1 "},"August, 2016"),i.default.createElement("div",{className:"f6 mt3 o-40"},"Team"),i.default.createElement("div",{className:"w-100"},f.map(function(e,t){return i.default.createElement("div",{key:"role"+t,className:"f6 pt1"},e.name," ",i.default.createElement("span",{className:"o-40"},e.title))})))),i.default.createElement("div",{className:"w-60-l dn db-l w-100 fl nt5 mb3"},i.default.createElement("img",{style:{minWidth:925},className:"",src:"../static/img/de_header.png"})),i.default.createElement("div",{className:"w-60-l db dn-l w-100 fl nb6 nl5 mb4"},i.default.createElement("img",{style:{minWidth:660},className:"",src:"../static/img/de_header.png"})))))),i.default.createElement("div",{className:"mw-limiter ph6-l center ph4 pt5"},i.default.createElement("div",{className:"flex mb3 pb4"},i.default.createElement("div",{className:"w-100 w-80-m w-70-l relative fl"},i.default.createElement("div",{className:"lh-copy f5  o-80"},"Mapbox Studio dataset editor provides a simple way to create and modify geospatial data. The editor stores data as GeoJSON files containing a list of features with coordinates, geometry and property information. Users can draw, import, edit and manage feature. They can also trace features from satellite imagery. Similar to the style editor, we wanted to the tool to be accessible to not just GIS professionals, but also designers who want to create a data visualizations or developer who needs custom data for their apps."))),i.default.createElement("div",{className:"flex mb4 pb4"},i.default.createElement("div",{className:"w-100 w-80-m w-70-l relative fl"},i.default.createElement("div",{className:"f3 light mb3"},"The Challenges"),i.default.createElement("div",{className:"lh-copy f5 mb3 o-80"},"The most difficult part of this project is definitely prioritizing features, deciding which to build for the initial release. We wanted to provide a foundation for more complicated features down the line and maintaining a balance between simplicity and flexibility. First we identified four main tasks for the interface: import, draw, edit, and export. Then we validated if the design can make performing those tasks easier through user testing. The main design challenges are: "),i.default.createElement("ol",{className:"lh-copy pt3 mb-list f5"},i.default.createElement("li",{className:"pb2"},i.default.createElement("span",{className:"f5 dib mb1 o-80"},"Shared property fields"),". ",i.default.createElement("span",{className:""},"Feautures inside one dataset usually share the same set of property fields. However we don't store such information in GeoJSON files. ")),i.default.createElement("li",{className:"pb2"},i.default.createElement("span",{className:"f5 dib mb1"},"Search"),i.default.createElement("span",{className:""},". It was difficult to filter the dataset and find specific features. ")),i.default.createElement("li",{className:""},i.default.createElement("span",{className:"f5 dib mb1"},"Precision"),i.default.createElement("span",{className:""},". Spatial data is precise and we want to give users full control when it's needed.")," "))))),i.default.createElement("div",{className:"w-100 bg-mb pv3-l ph4-l ph2 pb3 pb0-l"},i.default.createElement("div",{className:"pt4 pl3-l pl1 white f6 flex"},i.default.createElement("div",{style:{width:1164},className:" self-center center "},i.default.createElement("span",{className:"o-70 pl1"},"Dataset Editor Iteration 1")," ",i.default.createElement("span",{className:"o-40"},"March, 2016"))),i.default.createElement("div",{className:"flex flex-row pb2"},i.default.createElement("img",{style:{width:1164},className:"center  dn db-ns self-center",src:"../static/img/de_iteration_1.png"}),i.default.createElement("img",{style:{maxWidth:"230%"},className:"center  db dn-ns self-center",src:"../static/img/de_iteration_1.png"}))),i.default.createElement("div",{className:"mw-limiter ph6-l cf center ph4 pv5"},i.default.createElement("div",{className:"flex mb2"},i.default.createElement("div",{className:"w-100 w-80-m w-70-l relative fl"},i.default.createElement("div",{className:"f5 mt2 mb2"},"Iteration 1"),i.default.createElement("div",{className:"f3 light mt2 mb4"},"Multi-select and Feature List"),i.default.createElement("div",{className:"lh-copy f5 mb3 o-80"},'In early iterations of the data editor, the UI consisted of a feature list view on the map, and a map view on the right. Since we are showing a list, every feature needs a unique identifier. This introduces a problem because those dataset are stored and saved as GeoJSON files. A concept like "name" does not really exist in GeoJSON. So if we decided to move forward, this will add significant burden to implementation.'),i.default.createElement("div",{className:"lh-copy f5 mb3 o-80"},'Another problem I tried to tackle here is edit multiple features at the same time. Same as the feature "names", the concept of "shared property fields" also don\'t exist in GeoJSON. Every feature can have a list of different property fields.'),i.default.createElement("div",{className:"lh-copy f5 o-80"},"So we decided it's time to take a step back and think about if we wanted to adopt a UI that's similar to the GeoJSON structure, or diverge from it more dramatically. During my first user testing, the tester was indeed having lots of trouble finding features. But I noticed that she associated one feature with mutiple properties, such as both location and color, not just one single \"name\". Moreover, she identifies features through searching them directly on a map in the context of the entire dataset, not through names. Tom MacWright suggested removing the list and multi-select completely and really simplifying the UI to focus on the main tasks: draw, import, and edit. The user testings convinced me that is the right thing to do. And I'm grateful we did that early on.")))),i.default.createElement("div",{className:"w-100 bg-mb pv3-l ph4-l ph1 pb3 pb0-l"},i.default.createElement("div",{className:"pt4 pl2-l white f6 flex"},i.default.createElement("div",{style:{width:1164},className:" self-center center "},i.default.createElement("span",{className:"o-70 pl3"},"Dataset Editor Iteration 2")," ",i.default.createElement("span",{className:"o-40"},"June, 2016"))),i.default.createElement("div",{className:"flex flex-row pb2"},i.default.createElement("img",{style:{width:1164},className:"center db-ns dn self-center",src:"../static/img/de_iteration_2.png"}),i.default.createElement("img",{style:{maxWidth:"200%"},className:"center  db dn-ns self-center",src:"../static/img/de_iteration_2.png"}))),i.default.createElement("div",{className:"mw-limiter ph6-l cf center ph4 pv5"},i.default.createElement("div",{className:"flex mb2"},i.default.createElement("div",{className:"w-100 w-80-m w-70-l relative fl"},i.default.createElement("div",{className:"f5 mt2 mb2"},"Iteration 2"),i.default.createElement("div",{className:"f3 light mt2 mb4"},"Property and Code Editor"),i.default.createElement("div",{className:"lh-copy f5 mb3 o-80"},'The second major iteration focused on simplifying and refocusing. Without the feature list panel, there\'s a lot more space to directly draw on the map. By removing multi-select for property edit, we can focus on refining single feature edit. The "name" concept was completely removed in this iteration. Instead wen simply used geometry type plus coordinates to represent the feature. Matthew Whittemore introduced typehead to the property field input so users can see all existing fields available inside the dataset when they start typing. I also experimented with the position of the feature editing panel: an achored panel pinned to the left of the editor, or a popover that only shows up when user clicks on the feature on the map. We went forward with the former solution for simlicity and consistency.'),i.default.createElement("div",{className:"lh-copy f5 mb3 o-80"},"A big change we introduced here is the code editor. Users can access it through the ",i.default.createElement("code",{className:"f7"},"view source")," tab. This change allows for more precise control over the data, especially when people want to copy-paste coordinates information. The source code there is in GeoJSON format and completely reflected how the data is represented in the API level. This is a good example of how we retain flexibility and show complexity only when it's needed. "),i.default.createElement("div",{className:"lh-copy f5 mb3 o-80"},"Another main focus of this iteration is draw interactions. How can we indicate to users they can start drawing? How do we indicate they can close a shape? What should the interaction be when they want to modify a node of the shape? I sketched out some ideas and worked with Matthew to implement them in the framework the data editor uses for this interaction: mapbox-gl-draw. ")),i.default.createElement("div",{className:"dn mw6 pl5 db-l w-20-m items-end w-30-l fl relative"},i.default.createElement("div",{className:"absolute bottom-1"},i.default.createElement("img",{style:{width:266},className:"pl1 dib",src:"../static/img/de_draw.png"}),i.default.createElement("div",{className:"o-30 mt3  f7 lh-copy"},"Draw interactions"))))),i.default.createElement("div",{className:"w-100 bg-mb pv3-l ph4-l pb3 pb0-l"},i.default.createElement("div",{className:"pt4 pl4-l pl3 white f6 flex"},i.default.createElement("div",{style:{width:1200},className:" self-center center mb1"},i.default.createElement("span",{className:"o-70"},"Dataset Editor Iteration 3")," ",i.default.createElement("span",{className:"o-40"},"August, 2015"))),i.default.createElement("div",{className:"flex flex-row pb2"},i.default.createElement("img",{style:{width:1200},className:"center db-ns dn self-center",src:"../static/img/de_iteration_3.png"}),i.default.createElement("img",{style:{maxWidth:"200em"},className:"center  db dn-ns self-center",src:"../static/img/de_iteration_3.png"}))),i.default.createElement("div",{className:"bg-near-white w-100 pv4 lh-copy"},i.default.createElement("div",{className:"mw-limiter cf ph6-l mb4 ph4 center"},u.map(function(e,t){return i.default.createElement("div",{className:"fl pv3 w-100  w-third-ns pr4-ns"},i.default.createElement("img",{style:{width:280},src:e.imageSource}),i.default.createElement("div",{className:"f5 mt3"},e.title),i.default.createElement("div",{className:"f6 o-60 mt1"},e.description))}))),i.default.createElement("div",{className:"mw-limiter ph6-l cf center ph4 pv5"},i.default.createElement("div",{className:"flex mb2"},i.default.createElement("div",{className:"w-100 w-80-m w-70-l relative fl"},i.default.createElement("div",{className:"f5 mt2 mb2"},"Iteration 3"),i.default.createElement("div",{className:"f3 light mt2 mb4"},"Single Property Editing and Feature Search"),i.default.createElement("div",{className:"lh-copy f5 o-80"},"With almost all the basic functionalities in place, we started more aggressively user-testing the tool every week. User testings at this stage helped us identify intricate problems such as confusion around values types (number/string). We were able to solve many of the problems through introducing very minimum UI changes."))),i.default.createElement("div",{className:"w-100 mt5 flex-l flex-none br2 mb3"},i.default.createElement("div",{style:{flex:"auto 1 824px"},className:"br2 nl2-ns nl0"},i.default.createElement("img",{style:{width:824},className:"",src:"../static/img/de_view.png"})),i.default.createElement("div",{style:{flex:"1 1 240px"},className:"lh-copy flex pl4-l pl0"},i.default.createElement("div",{className:"self-end f7 mb4-l"},i.default.createElement("div",{className:" mt4-l mt2 f5"},"Listing pages"),i.default.createElement("div",{className:"o-60 mt1 f6"},"I designed several versions of the style and tileset listing page. The tileset page also includes to data upload status popover. "))))),i.default.createElement("div",{className:"w-100 bg-near-white pv5  lh-copy"},i.default.createElement("div",{className:"mw-limiter cf ph6-l ph4 center"},i.default.createElement("div",{className:"f3 light mb3"},"Modals"),i.default.createElement("div",{className:"flex-l flex-none"},i.default.createElement("div",{style:{flex:"1 1 500px"},className:"mr4-l mr0 mb4 mb0-l"},i.default.createElement("div",{className:" overflow-y-hidden"},i.default.createElement("img",{style:{width:500},className:"",src:"../static/img/de_modal_export.png"})),i.default.createElement("div",{className:"f5 mt2-l mt1 pl2"},"Dataset export modal")),i.default.createElement("div",{style:{flex:"1 1 500px"},className:"ml4-l ml0"},i.default.createElement("div",{className:"overflow-y-hidden"},i.default.createElement("img",{style:{width:500},className:"",src:"../static/img/de_modal_new.png"})),i.default.createElement("div",{className:"f5 mt2-l mt1 pl2"},"New dataset modal"))))),i.default.createElement("div",{className:"mw-limiter ph6-l cf center ph4 pt5"},i.default.createElement("div",{className:"flex mb4"},i.default.createElement("div",{className:"w-100 w-80-m w-70-l relative fl"},i.default.createElement("div",{className:"f3 light mb3"},"What I have learned"),i.default.createElement("div",{className:"lh-copy mt3 f5 o-80"},"Test early and often. Sometimes the problems are so small and detailed, I would never have believed they existed if I didn't sit in room with another person and watch them struggling with it. User testing prevents me from relying too much on what have been done in the past and instead helps me focus on design practical systems that support interactions."),i.default.createElement("div",{className:"lh-copy mt3 f5 o-80"},"Gain perspectives from disagreements. I often became angry when I can't get other people to like my work or agree with my proposals and I got frustrated with those human interactions. But design is really a team team effort, especially for a complicated product with many moving parts. Arguments can often bring in new perspectives. I don't need to agree with all of them but I have to understand them. It's less about winning all the battles, and more about realizing that I can not produce the best work without the people around me.")))),i.default.createElement(m.default,null))}},215:function(e,t,a){e.exports=a(104)}},[215]);
            return { page: comp.default }
          })
        