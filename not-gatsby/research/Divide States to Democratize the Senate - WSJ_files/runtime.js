!function(){"use strict";var e,a,c,d,f,b={},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var c=r[e]={id:e,loaded:!1,exports:{}};return b[e].call(c.exports,c,c.exports,n),c.loaded=!0,c.exports}n.m=b,e=[],n.O=function(a,c,d,f){if(!c){var b=1/0;for(t=0;t<e.length;t++){c=e[t][0],d=e[t][1],f=e[t][2];for(var r=!0,i=0;i<c.length;i++)(!1&f||b>=f)&&Object.keys(n.O).every((function(e){return n.O[e](c[i])}))?c.splice(i--,1):(r=!1,f<b&&(b=f));r&&(e.splice(t--,1),a=d())}return a}f=f||0;for(var t=e.length;t>0&&e[t-1][2]>f;t--)e[t]=e[t-1];e[t]=[c,d,f]},n.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(a,{a:a}),a},n.d=function(e,a){for(var c in a)n.o(a,c)&&!n.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(a,c){return n.f[c](e,a),a}),[]))},n.u=function(e){return{25:"6b162309-b34b-4477-9268-449540c8a77d",246:"a198aa89-57bd-4cef-9f66-ae55cdc82c1b",255:"d8e5710a-6f01-49ac-bc2b-1165135afa15",266:"38ce3d44-2ca9-4241-9b59-2152d8be3e8a",315:"FinancialNewsTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",409:"WSJNotedTheme-8510af2f-d489-4a7b-9af3-f34c7225f470",550:"BarronsTheme-17f32040-0bfd-4790-bb36-732d32093176",789:"WSJChinaTheme-8510af2f-d489-4a7b-9af3-f34c7225f470",868:"669cbb36-1bd8-4a26-89f6-ec35ac37fb24",925:"c66926ad-7297-41f4-83fd-e37f455ae2f2",934:"4d7c84cf-ae91-4e65-bf2c-cc9353c24997",994:"WSJTheme-fb5fe564-f5e7-4dee-a3d6-64e74386afdb",1040:"WSJTheme-17f32040-0bfd-4790-bb36-732d32093176",1091:"9b6fea7a-ca2a-4ec2-982f-ea3079678342",1110:"PENTheme-fb5fe564-f5e7-4dee-a3d6-64e74386afdb",1203:"MGTheme-fb5fe564-f5e7-4dee-a3d6-64e74386afdb",1301:"c8882c9c-15d3-4d1f-9b0e-81b6f321365d",1429:"WSJJapanTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",1435:"cd91bf8a-8f4e-11ea-bc55-0242ac130003",1473:"de2c57bf-7ed9-46fe-8634-5e1821833aaf",1621:"fbffe644-c181-43b3-aebc-fa53063c8be5",1750:"WSJNotedTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",1785:"1a415002-8aaa-4e15-8c40-6992945e319e",1860:"WSJSapTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",1873:"560c0be7-e399-4b06-8edf-e4008860cb3c",1884:"PENTheme-275181c7-8620-4df3-a008-d0cd9937db22",1956:"89236662-800d-427f-9A5d-f1df710f0e67",1965:"MGTheme-c7d876f1-825a-4882-b229-65bdb822398b",2053:"c8b2d263-28a6-4058-89de-03b72cbd94fd",2080:"55d9f697-d34b-4336-8762-2209402b89d0",2085:"56644be1-233b-4567-9e19-e4bdd511dd1d",2131:"c8fe48c4-a304-4ae8-9fea-73d1e85833db",2181:"WSJBarronsTheme-8510af2f-d489-4a7b-9af3-f34c7225f470",2208:"6b08b2f6-d09c-4298-90e0-ba5346b36ede",2238:"0ad70e52-063f-11ea-8d71-362b9e155667",2252:"8510af2f-d489-4a7b-9af3-f34c7225f470",2388:"cfbb66fc-a62f-461f-8b43-5b3da5aac8ff",2531:"c7081dd6-0394-e7b2-1124-a02c2970agdf",2722:"WSJNotedTheme-275181c7-8620-4df3-a008-d0cd9937db22",2785:"WSJPodcastsTheme-275181c7-8620-4df3-a008-d0cd9937db22",2856:"0dfe0a20-4ed1-4257-80ae-1991be4a3209",2907:"5c5570fe-7775-4969-92ed-c47ecb965e78",3014:"7cf6a774-9a34-43c7-9a92-0ebc9d2bbc70",3027:"FinancialInclusionAsiaTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",3040:"FinancialNewsTheme-8510af2f-d489-4a7b-9af3-f34c7225f470",3127:"WSJTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",3214:"BarronsTheme-c8882c9c-15d3-4d1f-9b0e-81b6f321365d",3226:"9fbfa5ec-f2b7-44b7-abb2-f2066b3cad6d",3337:"MGTheme-275181c7-8620-4df3-a008-d0cd9937db22",3375:"PENTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",3419:"WSJChinaTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",3424:"48c20b70-6689-4809-b749-88875ae7cf5f",3442:"WSJJapanTheme-8510af2f-d489-4a7b-9af3-f34c7225f470",3445:"5f16e5a1-59ba-4ee8-ba88-9e302e806498",3511:"WSJTheme-c7d876f1-825a-4882-b229-65bdb822398b",3581:"0f02fdac-e48b-45c4-aacc-87bff073b342",3634:"85141ee2-f2cc-429f-9909-813f457cb403",3780:"f7bed304-924e-4fb3-b62d-452baa7aa37d",3803:"WSJProTheme-275181c7-8620-4df3-a008-d0cd9937db22",3829:"WSJNotedTheme-c7081dd6-0394-e7b2-1124-a02c2970agdf",3898:"ab074b03-05b3-4b58-a11a-36e3e40b3210",3925:"b6aca5db-7ace-473b-ada5-bb26b7060196",3949:"FinancialNewsTheme-275181c7-8620-4df3-a008-d0cd9937db22",3984:"bdb931fc-7123-40e3-9de3-4175a4f402ed",4001:"9c7a6ad8-ef55-4415-81e8-bad8136363fc",4029:"WSJChinaTheme-275181c7-8620-4df3-a008-d0cd9937db22",4056:"WSJSnowglobeTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",4145:"d77afa6e-88d7-4e88-bb41-cb5d51eb2c7b",4191:"BarronsTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",4301:"MGTheme-c7081dd6-0394-e7b2-1124-a02c2970agdf",4444:"e6932d87-4b7f-4f69-b981-98a67f2161ba",4508:"WSJProTheme-8510af2f-d489-4a7b-9af3-f34c7225f470",4567:"3eae566d-c23c-486d-b425-5ffb6fd4852c",4757:"43569663-5165-4773-a0d1-d1cb2d5593b8",4805:"c13492a5-d9db-47c3-a804-80f45f96c081",4870:"FinancialNewsTheme-fb5fe564-f5e7-4dee-a3d6-64e74386afdb",4880:"7ba1dbea-62fd-4d9b-a6bb-3b56f925c654",4925:"fb946036-54e9-444e-a406-1d7d3167bcbc",5140:"ff737c6e-f21f-4f3c-809e-76d2c46e87ad",5174:"ae65199a-6106-4424-81ca-13d9a6606f5b",5259:"MGTheme-8510af2f-d489-4a7b-9af3-f34c7225f470",5296:"5770b9b4-727b-420d-8cf0-465775cd2b3c",5306:"ab67193d-478a-4824-abdd-f01351914934",5324:"MGTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",5439:"WSJBlogTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",5461:"b01f26b8-2b47-484e-846b-ce521838d568",5476:"5ea93298-622e-4660-b72f-e4a04ab8bb28",5575:"811638f8-b6cc-4a98-8c49-de2787313b43",5582:"275181c7-8620-4df3-a008-d0cd9937db22",5716:"WSJProTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",5737:"a60a63fb-ca63-4dc9-a416-7e999ed8398b",5857:"BarronsTheme-c7081dd6-0394-e7b2-1124-a02c2970agdf",5994:"BarronsTheme-275181c7-8620-4df3-a008-d0cd9937db22",6174:"c0d6c6a6-f448-441d-a95c-4631873fbe38",6266:"WSJTheme-2beaefde-a9fb-494e-8a44-f779376ce00c",6295:"96c349b6-3f3c-48fb-ab2c-6e96dff1d9fe",6427:"WSJTheme-c7081dd6-0394-e7b2-1124-a02c2970agdf",6523:"WSJTheme-275181c7-8620-4df3-a008-d0cd9937db22",6596:"WhatsNewsTheme-275181c7-8620-4df3-a008-d0cd9937db22",6942:"BarronsTheme-8510af2f-d489-4a7b-9af3-f34c7225f470",7028:"FinancialNewsTheme-c7d876f1-825a-4882-b229-65bdb822398b",7064:"17fb3039-e0a0-40f9-9eb8-36c5539cfbf3",7087:"WSJSnowglobeTheme-275181c7-8620-4df3-a008-d0cd9937db22",7162:"cbf93715-4841-498e-87f9-000ff056d48e",7444:"WSJProTheme-c7081dd6-0394-e7b2-1124-a02c2970agdf",7663:"e7405176-bbcc-4708-be59-59abea4d4178",7709:"da958137-7a87-477f-9506-0785ee1e5eae",7951:"PENTheme-8510af2f-d489-4a7b-9af3-f34c7225f470",7970:"1342ffcc-b12d-4b90-9303-b74a4fdb4840",8178:"aaa55b77-b0bf-468f-afa2-de996704f9bd",8352:"BarronsTheme-fb5fe564-f5e7-4dee-a3d6-64e74386afdb",8511:"141399ba-ea76-4981-a9e6-d1fdbdc039b1",8536:"3eae566d-c23c-486d-b425-d4852c5ffb6f",8547:"531a55ea-7cc4-4c30-80c4-7197d0008a4c",8630:"83d581ce-5339-406c-8237-fac8444be160",8785:"WSJLiveQATheme-275181c7-8620-4df3-a008-d0cd9937db22",9059:"b79f4a16-6c37-4ee7-a91d-f5aa7a62edc9",9111:"2beaefde-a9fb-494e-8a44-f779376ce00c",9393:"WSJTheme-8510af2f-d489-4a7b-9af3-f34c7225f470",9454:"bfba0caf-a926-4cb5-a27d-a6c1a205f50a",9478:"03c85c64-f03f-4789-9e88-00158f0ea41e",9627:"f338146a-1781-47b4-a8e4-91af9ba7d64c",9645:"8b6954fb-e01d-4346-8135-cb326b4c5831",9763:"PENTheme-c7d876f1-825a-4882-b229-65bdb822398b",9824:"BarronsTheme-c7d876f1-825a-4882-b229-65bdb822398b",9853:"17f32040-0bfd-4790-bb36-732d32093176",9978:"WSJLCTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d"}[e]+"."+{25:"60b1d8c5bda9",246:"608d28d95bdd",255:"7e5695f71499",266:"e5a550b05765",315:"4b9c18c85f00",409:"393a115b82a7",550:"8fd8d02a9903",789:"a1ee54fb7f52",868:"502afb323e45",925:"d1685f854c91",934:"ec6150591352",994:"6aa1acf0cae8",1040:"5585b679e8f9",1091:"dababcd7d2a6",1110:"540635f86d5c",1203:"4849f221009b",1301:"25bcae196df8",1429:"c8bb25ea45c8",1435:"2307df15ce93",1473:"4a991e574645",1621:"71494ac7962c",1750:"f0db8dd39e66",1785:"ff2549e2222a",1860:"098442309940",1873:"12e33df6aa16",1884:"03f705a6a813",1956:"8195734a029b",1965:"dd6545841549",2053:"9f2bb89b7780",2080:"e7d00af4e238",2085:"3210e90781d9",2131:"927663debf5b",2181:"1e11df92e006",2208:"1fb38bd724e1",2238:"e66d5820d4d5",2252:"f476e2cf80a6",2388:"18fae3ee22a9",2531:"37d7522da5ea",2722:"00ecd360e869",2785:"681ff1b2e5a4",2856:"964ba9966b07",2907:"884236d02179",3014:"d1996060af6f",3027:"a3682690a58e",3040:"aa209b99d3a0",3127:"846720f19b50",3214:"e6d4d91cf940",3226:"811f1e74f32d",3337:"6bbc78aa0371",3375:"0e9167ec990d",3419:"304f2695dd0b",3424:"f14ea49249f3",3442:"3af1e95e8c4f",3445:"ebd06edd188c",3511:"c7ef106ddef2",3581:"53283d0c815d",3634:"1bffd1575683",3780:"a78651a37591",3803:"1598cce5d2ab",3829:"603d1c8a5941",3898:"115fe6b78a4e",3925:"9a2742d71501",3949:"cee402c4e0c5",3984:"e163fdc1e14f",4001:"a6bd273aca29",4029:"f6cca9349849",4056:"cf01a3818b57",4145:"e41bef3de5b4",4191:"7da511660a11",4301:"f73bcb2da7d7",4444:"52d315054204",4508:"b18db1d57909",4567:"a5209ff2b981",4757:"27fb04a95c32",4805:"6901af6add7a",4870:"766cca02cb41",4880:"a5a7f542c06f",4925:"2f7b8786d200",5140:"8ddaab08ce5a",5174:"abae6b9436e0",5259:"0d30819360d8",5296:"30a1b83fd38d",5306:"88737099b0ee",5324:"36745e4bffc6",5439:"39c437e5798c",5461:"fd3a6a89cfeb",5476:"cf29002e6ab8",5575:"3e8de7cd3225",5582:"cf4092a297a6",5716:"e04a783b78f1",5737:"4fc683a76ebd",5857:"5d9cdbb7b5f1",5994:"bcff288b6be8",6174:"2d73d867d33a",6266:"13fee4d00f4d",6295:"d0b611e2cdda",6427:"3ef903a2a3d5",6523:"883ea61e84c6",6596:"259c73246c88",6942:"e792f5646991",7028:"b1c59aac6d2c",7064:"33d64771f79e",7087:"6cc826744372",7162:"3d599ad36501",7444:"db37a3093b7b",7663:"98aa21c1e844",7709:"625cf490363b",7951:"a12bce206e80",7970:"1306644999d3",8178:"8247b09db88c",8352:"8aeaaf19ab30",8511:"58beb990464d",8536:"d0b49132c827",8547:"cf351690a558",8630:"62e28d4e7b9b",8785:"12318367029c",9059:"de54c1c12ae4",9111:"09c896df8c9a",9393:"29f744dcee24",9454:"ad8a38fc4272",9478:"72037f442b66",9627:"9555ba78ccf6",9645:"1a90bf69ae36",9763:"926ac54a1197",9824:"557ba6b4a2d8",9853:"7022dca3143f",9978:"6fec862a8085"}[e]+".js"},n.miniCssF=function(e){return{5:"china_wsj_resp_article_16u.async",25:"6b162309-b34b-4477-9268-449540c8a77d",73:"deloitte_wsj_cmo_resp_article.critical",246:"a198aa89-57bd-4cef-9f66-ae55cdc82c1b",255:"d8e5710a-6f01-49ac-bc2b-1165135afa15",281:"wsj_series_article.async",315:"FinancialNewsTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",408:"mw_resp_article_snippet.async",409:"WSJNotedTheme-8510af2f-d489-4a7b-9af3-f34c7225f470",544:"wsj_resp_err404.async",550:"BarronsTheme-17f32040-0bfd-4790-bb36-732d32093176",596:"mw_nativo_article.critical",676:"mw_resp_article.async",773:"bonmw_resp_article_snippet.critical",789:"WSJChinaTheme-8510af2f-d489-4a7b-9af3-f34c7225f470",861:"japan_wsj_buildingblocks_article.critical",868:"669cbb36-1bd8-4a26-89f6-ec35ac37fb24",895:"wsj_resp_article_16u_snippet.critical",925:"c66926ad-7297-41f4-83fd-e37f455ae2f2",934:"4d7c84cf-ae91-4e65-bf2c-cc9353c24997",994:"WSJTheme-fb5fe564-f5e7-4dee-a3d6-64e74386afdb",1040:"WSJTheme-17f32040-0bfd-4790-bb36-732d32093176",1091:"9b6fea7a-ca2a-4ec2-982f-ea3079678342",1110:"PENTheme-fb5fe564-f5e7-4dee-a3d6-64e74386afdb",1203:"MGTheme-fb5fe564-f5e7-4dee-a3d6-64e74386afdb",1412:"wsj_noted_magazine_snippet.critical",1429:"WSJJapanTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",1435:"cd91bf8a-8f4e-11ea-bc55-0242ac130003",1473:"de2c57bf-7ed9-46fe-8634-5e1821833aaf",1621:"fbffe644-c181-43b3-aebc-fa53063c8be5",1668:"japan_wsj_resp_article_16u_snippet.critical",1678:"japan_wsj_buildingblocks_snippet.async",1686:"barrons_resp_article_16u_slideshow.critical",1710:"barrons_resp_article_snippet.critical",1750:"WSJNotedTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",1785:"1a415002-8aaa-4e15-8c40-6992945e319e",1816:"fn_slideshow.async",1860:"WSJSapTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",1873:"560c0be7-e399-4b06-8edf-e4008860cb3c",1876:"wsj_noted_magazine_article.async",1884:"PENTheme-275181c7-8620-4df3-a008-d0cd9937db22",1952:"pen_err404.async",1956:"89236662-800d-427f-9A5d-f1df710f0e67",1965:"MGTheme-c7d876f1-825a-4882-b229-65bdb822398b",1976:"wsjprocb_desktop_full_article.async",1979:"mg_err404.async",2040:"wsjprovc_desktop_full_article.async",2053:"c8b2d263-28a6-4058-89de-03b72cbd94fd",2080:"55d9f697-d34b-4336-8762-2209402b89d0",2085:"56644be1-233b-4567-9e19-e4bdd511dd1d",2125:"wsjpro_article_json.async",2131:"c8fe48c4-a304-4ae8-9fea-73d1e85833db",2169:"japan_wsj_buildingblocks_article.async",2181:"WSJBarronsTheme-8510af2f-d489-4a7b-9af3-f34c7225f470",2208:"6b08b2f6-d09c-4298-90e0-ba5346b36ede",2235:"deloitte_wsj_cmo_resp_article.async",2238:"0ad70e52-063f-11ea-8d71-362b9e155667",2349:"barrons_article_preview_with_ad_slots.critical",2388:"cfbb66fc-a62f-461f-8b43-5b3da5aac8ff",2499:"global_ie_css",2541:"pen_slideshow.async",2585:"china_wsj_resp_article_16u.critical",2722:"WSJNotedTheme-275181c7-8620-4df3-a008-d0cd9937db22",2785:"WSJPodcastsTheme-275181c7-8620-4df3-a008-d0cd9937db22",2803:"barrons_article_json.async",2856:"0dfe0a20-4ed1-4257-80ae-1991be4a3209",2866:"mw_nativo_article.async",2907:"5c5570fe-7775-4969-92ed-c47ecb965e78",3014:"7cf6a774-9a34-43c7-9a92-0ebc9d2bbc70",3027:"FinancialInclusionAsiaTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",3040:"FinancialNewsTheme-8510af2f-d489-4a7b-9af3-f34c7225f470",3126:"wsj_resp_article_16u_snippet.async",3127:"WSJTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",3208:"china_wsj_resp_article_16u_snippet.async",3214:"BarronsTheme-c8882c9c-15d3-4d1f-9b0e-81b6f321365d",3226:"9fbfa5ec-f2b7-44b7-abb2-f2066b3cad6d",3335:"barrons_hero_article_preview.critical",3337:"MGTheme-275181c7-8620-4df3-a008-d0cd9937db22",3369:"fn_err404.async",3371:"wsjprobr_desktop_snippet_article.async",3375:"PENTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",3419:"WSJChinaTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",3424:"48c20b70-6689-4809-b749-88875ae7cf5f",3442:"WSJJapanTheme-8510af2f-d489-4a7b-9af3-f34c7225f470",3445:"5f16e5a1-59ba-4ee8-ba88-9e302e806498",3511:"WSJTheme-c7d876f1-825a-4882-b229-65bdb822398b",3517:"wsjprope_desktop_full_article.async",3563:"pen_snippet_article.async",3581:"0f02fdac-e48b-45c4-aacc-87bff073b342",3619:"experiential_16u.async",3634:"85141ee2-f2cc-429f-9909-813f457cb403",3684:"wsjprosmi_full_article.async",3780:"f7bed304-924e-4fb3-b62d-452baa7aa37d",3803:"WSJProTheme-275181c7-8620-4df3-a008-d0cd9937db22",3829:"WSJNotedTheme-c7081dd6-0394-e7b2-1124-a02c2970agdf",3841:"mw_err404.async",3898:"ab074b03-05b3-4b58-a11a-36e3e40b3210",3925:"b6aca5db-7ace-473b-ada5-bb26b7060196",3949:"FinancialNewsTheme-275181c7-8620-4df3-a008-d0cd9937db22",3984:"bdb931fc-7123-40e3-9de3-4175a4f402ed",4001:"9c7a6ad8-ef55-4415-81e8-bad8136363fc",4029:"WSJChinaTheme-275181c7-8620-4df3-a008-d0cd9937db22",4056:"WSJSnowglobeTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",4082:"wsjprobr_desktop_full_article.async",4145:"d77afa6e-88d7-4e88-bb41-cb5d51eb2c7b",4186:"barrons_article_json.critical",4191:"BarronsTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",4234:"wsj_modern.async",4249:"china_wsj_resp_article_16u_snippet.critical",4275:"china_wsj_resp_article_16u_slideshow.critical",4301:"MGTheme-c7081dd6-0394-e7b2-1124-a02c2970agdf",4381:"mw_err404.critical",4385:"wsjprovc_desktop_snippet_article.async",4444:"e6932d87-4b7f-4f69-b981-98a67f2161ba",4508:"WSJProTheme-8510af2f-d489-4a7b-9af3-f34c7225f470",4567:"3eae566d-c23c-486d-b425-5ffb6fd4852c",4744:"wsj_resp_err404.critical",4757:"43569663-5165-4773-a0d1-d1cb2d5593b8",4761:"japan_wsj_resp_article_16u.critical",4805:"c13492a5-d9db-47c3-a804-80f45f96c081",4870:"FinancialNewsTheme-fb5fe564-f5e7-4dee-a3d6-64e74386afdb",4880:"7ba1dbea-62fd-4d9b-a6bb-3b56f925c654",4883:"wsj_resp_interactive_puzzle_16u.critical",4925:"fb946036-54e9-444e-a406-1d7d3167bcbc",5104:"wsj_buildingblocks_article.critical",5114:"wsj_noted_magazine_article.critical",5140:"ff737c6e-f21f-4f3c-809e-76d2c46e87ad",5167:"china_wsj_resp_article_16u_slideshow.async",5174:"ae65199a-6106-4424-81ca-13d9a6606f5b",5259:"MGTheme-8510af2f-d489-4a7b-9af3-f34c7225f470",5296:"5770b9b4-727b-420d-8cf0-465775cd2b3c",5306:"ab67193d-478a-4824-abdd-f01351914934",5324:"MGTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",5346:"pen_full_article.async",5438:"japan_wsj_buildingblocks_snippet.critical",5439:"WSJBlogTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",5461:"b01f26b8-2b47-484e-846b-ce521838d568",5476:"5ea93298-622e-4660-b72f-e4a04ab8bb28",5507:"wsj_resp_article_16u_slideshow.critical",5575:"811638f8-b6cc-4a98-8c49-de2787313b43",5716:"WSJProTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d",5737:"a60a63fb-ca63-4dc9-a416-7e999ed8398b",5759:"mg_full_article.async",5772:"barrons_nativo_article.async",5857:"BarronsTheme-c7081dd6-0394-e7b2-1124-a02c2970agdf",5994:"BarronsTheme-275181c7-8620-4df3-a008-d0cd9937db22",6069:"barrons_resp_article.async",6083:"barrons_resp_article.critical",6173:"barrons_resp_article_16u_slideshow.async",6174:"c0d6c6a6-f448-441d-a95c-4631873fbe38",6201:"wsjprocs_desktop_full_article.async",6266:"WSJTheme-2beaefde-a9fb-494e-8a44-f779376ce00c",6295:"96c349b6-3f3c-48fb-ab2c-6e96dff1d9fe",6422:"barrons_ap_resp_article.critical",6425:"barrons_ap_resp_article.async",6427:"WSJTheme-c7081dd6-0394-e7b2-1124-a02c2970agdf",6441:"wsjprope_desktop_snippet_article.async",6523:"WSJTheme-275181c7-8620-4df3-a008-d0cd9937db22",6596:"WhatsNewsTheme-275181c7-8620-4df3-a008-d0cd9937db22",6700:"wsjprocs_desktop_snippet_article.async",6863:"japan_wsj_resp_article_16u_slideshow.critical",6876:"wsj_resp_article_16u.critical",6925:"wsj_buildingblocks_snippet.async",6942:"BarronsTheme-8510af2f-d489-4a7b-9af3-f34c7225f470",7013:"bonmw_resp_article_snippet.async",7028:"FinancialNewsTheme-c7d876f1-825a-4882-b229-65bdb822398b",7055:"bonmw_resp_article.async",7064:"17fb3039-e0a0-40f9-9eb8-36c5539cfbf3",7087:"WSJSnowglobeTheme-275181c7-8620-4df3-a008-d0cd9937db22",7162:"cbf93715-4841-498e-87f9-000ff056d48e",7243:"china_wsj_resp_err404.async",7444:"WSJProTheme-c7081dd6-0394-e7b2-1124-a02c2970agdf",7663:"e7405176-bbcc-4708-be59-59abea4d4178",7677:"japan_wsj_resp_article_16u.async",7709:"da958137-7a87-477f-9506-0785ee1e5eae",7768:"fn_full_article.async",7857:"wsj_resp_article_16u_slideshow.async",7871:"wsjproai_desktop_full_article.async",7896:"japan_wsj_resp_article_16u_snippet.async",7902:"barrons_nativo_article.critical",7951:"PENTheme-8510af2f-d489-4a7b-9af3-f34c7225f470",7970:"1342ffcc-b12d-4b90-9303-b74a4fdb4840",7971:"barrons_iframed_article.async",8094:"wsjproai_desktop_snippet_article.async",8129:"wsjprosmi_full_article.critical",8175:"barrons_ap_resp_article_snippet.async",8178:"aaa55b77-b0bf-468f-afa2-de996704f9bd",8229:"wsj_buildingblocks_article.async",8293:"barrons_iframed_article.critical",8352:"BarronsTheme-fb5fe564-f5e7-4dee-a3d6-64e74386afdb",8452:"wsj_modern.critical",8511:"141399ba-ea76-4981-a9e6-d1fdbdc039b1",8536:"3eae566d-c23c-486d-b425-d4852c5ffb6f",8592:"fn_article_json.async",8596:"mw_resp_article_snippet.critical",8630:"83d581ce-5339-406c-8237-fac8444be160",8674:"barrons_resp_article_snippet.async",8697:"japan_wsj_resp_article_16u_slideshow.async",8703:"wsjprocb_desktop_snippet_article.async",8772:"bonmw_resp_article.critical",8785:"WSJLiveQATheme-275181c7-8620-4df3-a008-d0cd9937db22",9059:"b79f4a16-6c37-4ee7-a91d-f5aa7a62edc9",9150:"wsj_series_article.critical",9165:"wsj_resp_article_16u.async",9203:"wsj_modern_snippet.async",9393:"WSJTheme-8510af2f-d489-4a7b-9af3-f34c7225f470",9454:"bfba0caf-a926-4cb5-a27d-a6c1a205f50a",9466:"wsj_resp_interactive_puzzle_16u.async",9478:"03c85c64-f03f-4789-9e88-00158f0ea41e",9606:"wsj_modern_snippet.critical",9608:"fn_snippet_article.async",9627:"f338146a-1781-47b4-a8e4-91af9ba7d64c",9645:"8b6954fb-e01d-4346-8135-cb326b4c5831",9746:"barrons_ap_resp_article_snippet.critical",9749:"wsj_buildingblocks_snippet.critical",9758:"wsj_noted_magazine_snippet.async",9763:"PENTheme-c7d876f1-825a-4882-b229-65bdb822398b",9780:"mw_resp_article.critical",9824:"BarronsTheme-c7d876f1-825a-4882-b229-65bdb822398b",9978:"WSJLCTheme-f7bed304-924e-4fb3-b62d-452baa7aa37d"}[e]+"."+{5:"71b8d8de667e",25:"ad2292a6d02b",73:"0d3fac35ec39",246:"9ec00eecc0e6",255:"0dcd8c723e05",281:"ea90ab22781d",315:"f0805f4ebe75",408:"b720bce71a85",409:"ca66ee693417",544:"0eb2b2c20953",550:"17623f87c711",596:"c6f04543d6f1",676:"454f91dae377",773:"c6f04543d6f1",789:"e443df694def",861:"e1f084e34f26",868:"50bcc701b1ca",895:"00cf73c71fab",925:"4b6f2bfc45b4",934:"5b2821d4a9b7",994:"a87db23e842c",1040:"ce209384c626",1091:"a9321b2277d3",1110:"590e313fa978",1203:"6acda4a83b2e",1412:"8cb394bccb03",1429:"cf25778dbfa4",1435:"dd08ab3f6dd1",1473:"baf5289833e4",1621:"709408588836",1668:"f23977dd21e2",1678:"616e632893e5",1686:"8c4e6ce88403",1710:"8c4e6ce88403",1750:"717a6200c113",1785:"64d8adbbef73",1816:"5d5c695fe76d",1860:"19f9b286c500",1873:"0494d8b99b8c",1876:"2171d1c3bff9",1884:"dd327ddd9c49",1952:"c2adf4e86df2",1956:"8a3e6efccd49",1965:"8e69a83f77a1",1976:"af4b4c284a6f",1979:"138e5257a8cb",2040:"af4b4c284a6f",2053:"9b16218cc8d4",2080:"3c6e881cbe07",2085:"4f22a68531ae",2125:"05bfab0f4453",2131:"a5f340a08a13",2169:"cfcdd72b323f",2181:"0120aaa9bf80",2208:"2e9ef5abfcd6",2235:"7f0891ef5441",2238:"fb2d5b6809e7",2349:"8c4e6ce88403",2388:"c3102e227ff7",2499:"d0183bde1145",2541:"c2adf4e86df2",2585:"fe32fabf5775",2722:"c17fc8b3ae40",2785:"06b576253cc3",2803:"a365a3adcd0d",2856:"608a199596ec",2866:"454f91dae377",2907:"e8d8a68f1140",3014:"42f181e20ca6",3027:"b3017c1b6e16",3040:"a942b4b24a2c",3126:"2c4f911cabe4",3127:"68d18df43a21",3208:"79d8ca7bd0fe",3214:"31ee81c5c304",3226:"93fb05cdaf5c",3335:"8c4e6ce88403",3337:"d1ef4c8d4a76",3369:"fbc322accb48",3371:"18eb0f2c68e2",3375:"bd2efc2763ef",3419:"e8ee8c903483",3424:"31d6cfe0d16a",3442:"a5ae135af589",3445:"e18598359252",3511:"18c6a33eb94d",3517:"af4b4c284a6f",3563:"a93ec6571c80",3581:"63b9296d3952",3619:"81232250fe94",3634:"12cbb5bd625d",3684:"0a934c58c216",3780:"e44bedb4eba2",3803:"3197e12d0dc5",3829:"defa3a5c9914",3841:"454f91dae377",3898:"2f510bdf5c53",3925:"6e30a5cffa98",3949:"13be62a817bb",3984:"39968717a811",4001:"171e2be783b8",4029:"24f321b5f747",4056:"168b39c2b845",4082:"af4b4c284a6f",4145:"5a5505ad3415",4186:"8c4e6ce88403",4191:"baf2e96645ff",4234:"09e244f1c593",4249:"466c721518a7",4275:"4e353e2820ff",4301:"8a4706467e92",4381:"c6f04543d6f1",4385:"18eb0f2c68e2",4444:"668d8c0f3730",4508:"fd1797a06ed9",4567:"e9df9934bac6",4744:"15df54043e97",4757:"a91149b8e610",4761:"c27e612dbc5e",4805:"87aa8aa18bc9",4870:"7df342e47ca2",4880:"6334f635817f",4883:"6a297004fd1f",4925:"474bf342874c",5104:"b4f48599e1ae",5114:"7b0cac96b0cb",5140:"9e33829611af",5167:"eca79296321f",5174:"dde075eb08b6",5259:"ec5bf7c30020",5296:"baa77d44e92e",5306:"5aa9fb50ed8d",5324:"1891553ce2f4",5346:"c2adf4e86df2",5438:"f0951c8fcc01",5439:"5238e14b3ae1",5461:"e4f7797b7881",5476:"32ea49dabf21",5507:"92e3ddcfddf5",5575:"5da94ce7be8e",5716:"8e10ac7dd3af",5737:"673e3d418287",5759:"d17c3ae8fe14",5772:"bb28261d604b",5857:"c96fe9207d1c",5994:"90a422e9dae6",6069:"a365a3adcd0d",6083:"8c4e6ce88403",6173:"a365a3adcd0d",6174:"f4635bd7ae60",6201:"46873f9d173f",6266:"869d77962a7e",6295:"01aa84518a5d",6422:"8c4e6ce88403",6425:"a365a3adcd0d",6427:"d3fccb278c89",6441:"aca1f9d85c63",6523:"00a3c67948f7",6596:"d4e4bd1638f4",6700:"0a62781afaae",6863:"5bfcd9c285bc",6876:"9d2f0e827271",6925:"5f2eaf719959",6942:"76fe168a63eb",7013:"b720bce71a85",7028:"7156f6951b40",7055:"454f91dae377",7064:"21ea9a460dad",7087:"72d04b6cedb5",7162:"7bdd176164c2",7243:"be8837159ec5",7444:"d3fccb278c89",7663:"064d9538c9a8",7677:"3e833cb905a4",7709:"3e72c4986a3f",7768:"b08dd2c9d8fa",7857:"eca79296321f",7871:"af4b4c284a6f",7896:"86505031deb2",7902:"8c4e6ce88403",7951:"01decded5826",7970:"6113b490f3fa",7971:"a365a3adcd0d",8094:"18eb0f2c68e2",8129:"3e72c4986a3f",8175:"a365a3adcd0d",8178:"2fc913d5f9f7",8229:"e77f74316729",8293:"8c4e6ce88403",8352:"5c2b51c37a50",8452:"c49d3482d8cb",8511:"2fcc24f53654",8536:"e9df9934bac6",8592:"b8b9490987f6",8596:"c6f04543d6f1",8630:"33e390069984",8674:"a365a3adcd0d",8697:"1109f93c3504",8703:"18eb0f2c68e2",8772:"c6f04543d6f1",8785:"ce42d35f7226",9059:"1f79e3551943",9150:"ae43840bcc32",9165:"cf73ff9a56b8",9203:"82a135895be1",9393:"1ae54592e707",9454:"1e634b9118f3",9466:"4d2fa534fdff",9478:"c9f94366439f",9606:"15466bd352ef",9608:"d7fba4d9f353",9627:"bfb255cf02e3",9645:"286819ad2253",9746:"8c4e6ce88403",9749:"bb82d2214837",9758:"400aef2a7c9a",9763:"507806c585eb",9780:"c6f04543d6f1",9824:"2d337784c72b",9978:"d1fb67eab1e5"}[e]+".css"},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},a={},c="wsj_article.app:",n.l=function(e,d,f,b){if(a[e])a[e].push(d);else{var r,i;if(void 0!==f)for(var t=document.getElementsByTagName("script"),s=0;s<t.length;s++){var _=t[s];if(_.getAttribute("src")==e||_.getAttribute("data-webpack")==c+f){r=_;break}}r||(i=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",c+f),r.src=e),a[e]=[d];var o=function(c,d){r.onerror=r.onload=null,clearTimeout(l);var f=a[e];if(delete a[e],r.parentNode&&r.parentNode.removeChild(r),f&&f.forEach((function(e){return e(d)})),c)return c(d)},l=setTimeout(o.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=o.bind(null,r.onerror),r.onload=o.bind(null,r.onload),i&&document.head.appendChild(r)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},n.p="https://asset.barrons.com/article/public/",d=function(e){return new Promise((function(a,c){var d=n.miniCssF(e),f=n.p+d;if(function(e,a){for(var c=document.getElementsByTagName("link"),d=0;d<c.length;d++){var f=(r=c[d]).getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(f===e||f===a))return r}var b=document.getElementsByTagName("style");for(d=0;d<b.length;d++){var r;if((f=(r=b[d]).getAttribute("data-href"))===e||f===a)return r}}(d,f))return a();!function(e,a,c,d){var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onerror=f.onload=function(b){if(f.onerror=f.onload=null,"load"===b.type)c();else{var r=b&&("load"===b.type?"missing":b.type),n=b&&b.target&&b.target.href||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=r,i.request=n,f.parentNode.removeChild(f),d(i)}},f.href=a,document.head.appendChild(f)}(e,f,a,c)}))},f={3666:0},n.f.miniCss=function(e,a){f[e]?a.push(f[e]):0!==f[e]&&{25:1,246:1,255:1,315:1,409:1,550:1,789:1,868:1,925:1,934:1,994:1,1040:1,1091:1,1110:1,1203:1,1429:1,1435:1,1473:1,1621:1,1750:1,1785:1,1860:1,1873:1,1884:1,1956:1,1965:1,2053:1,2080:1,2085:1,2131:1,2181:1,2208:1,2238:1,2388:1,2722:1,2785:1,2856:1,2907:1,3014:1,3027:1,3040:1,3127:1,3214:1,3226:1,3337:1,3375:1,3419:1,3424:1,3442:1,3445:1,3511:1,3581:1,3634:1,3780:1,3803:1,3829:1,3898:1,3925:1,3949:1,3984:1,4001:1,4029:1,4056:1,4145:1,4191:1,4301:1,4444:1,4508:1,4567:1,4757:1,4805:1,4870:1,4880:1,4925:1,5140:1,5174:1,5259:1,5296:1,5306:1,5324:1,5439:1,5461:1,5476:1,5575:1,5716:1,5737:1,5857:1,5994:1,6174:1,6266:1,6295:1,6427:1,6523:1,6596:1,6942:1,7028:1,7064:1,7087:1,7162:1,7444:1,7663:1,7709:1,7951:1,7970:1,8178:1,8352:1,8511:1,8536:1,8630:1,8785:1,9059:1,9393:1,9454:1,9478:1,9627:1,9645:1,9763:1,9824:1,9978:1}[e]&&a.push(f[e]=d(e).then((function(){f[e]=0}),(function(a){throw delete f[e],a})))},function(){var e={3666:0};n.f.j=function(a,c){var d=n.o(e,a)?e[a]:void 0;if(0!==d)if(d)c.push(d[2]);else if(3666!=a){var f=new Promise((function(c,f){d=e[a]=[c,f]}));c.push(d[2]=f);var b=n.p+n.u(a),r=new Error;n.l(b,(function(c){if(n.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var f=c&&("load"===c.type?"missing":c.type),b=c&&c.target&&c.target.src;r.message="Loading chunk "+a+" failed.\n("+f+": "+b+")",r.name="ChunkLoadError",r.type=f,r.request=b,d[1](r)}}),"chunk-"+a,a)}else e[a]=0},n.O.j=function(a){return 0===e[a]};var a=function(a,c){var d,f,b=c[0],r=c[1],i=c[2],t=0;for(d in r)n.o(r,d)&&(n.m[d]=r[d]);for(i&&i(n),a&&a(c);t<b.length;t++)f=b[t],n.o(e,f)&&e[f]&&e[f][0](),e[b[t]]=0;n.O()},c=self.webpackChunkwsj_article_app=self.webpackChunkwsj_article_app||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))}(),n.O()}();