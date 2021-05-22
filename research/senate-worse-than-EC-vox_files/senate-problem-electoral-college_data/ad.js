window.hymnalAdConfig = {
  id: '184f0650-22dd-464f-8baa-defe127be924',
  slug: "house_promotions_anassner_210304_ecl1039_apr_houseads_1400x510_184f0650-22dd-464f-8baa-defe127be924",
  adName: "anassner_210304_ECL1039_Apr_HouseAds_1400x510",
  type: 'Prelude Template',
  campaign: "house_promotions_eater_wine_club_q4_2020_3986",
  campaignName: "Eater Wine Club - Q4 2020 + Q1 2021",
  brand: "House Promotions",
  design_template: "Prelude (Image) with SDKv2",
  disableSlotRefresh: false,
  enableSlotReveal: true,
  showFeedbackForm: false,
  preambleEnabled: false,
  preambleOverlay: false,
  aspect_ratio: {"mobile":2.7450980392156863,"desktop":2.7450980392156863},
  max_height: {"mobile":600,"desktop":600},
  renderInIframe: true,
  html: {"c9001601705fbcf80e68e9c6be9c0494":"\u003cdiv class=\\\"ad__prelude\\\"\u003e\u003cp class=\\\"ad__accessibility\\\"\u003e\u003c\\/p\u003e\u003cdiv class=\\\"ad__content\\\"\u003e\u003c\\/div\u003e\u003c\\/div\u003e"},
  css: {"c9001601705fbcf80e68e9c6be9c0494":".ad__content{cursor:pointer;position:absolute;background:transparent url(\\\"https://hymnal-prod.vox-cdn.com/uploads/asset/file/118714/anassner_210304_ECL1039_Apr_HouseAds_1400x510.gif\\\") no-repeat 50% 50%/cover;width:100%;height:100%;overflow:hidden;z-index:1}.ad__content:before{content:\\'ADVERTISEMENT\\';font-size:10px;color:#ffffff;position:absolute;font-family:-apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;z-index:2;padding:2px 4px;border-radius:4px;top:7px;left:7px}.ad__accessibility{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}"},
  js: {"c9001601705fbcf80e68e9c6be9c0494":"document.querySelector('.ad__content').addEventListener('click', function() {\n  AD.clickthrough();\n});\n"},
  fields: {"c9001601705fbcf80e68e9c6be9c0494":{"ad_label_location":"top right","accessibility_messaging_text":"","ad_bug_color":"#ffffff","html":"<div class=\"ad__prelude\">\n  <p class=\"ad__accessibility\">$TEMPLATE_TEXT[accessibility_messaging_text]</p>\n  <div class=\"ad__content\"></div>\n</div>\n","css":"// Ensure a fallback if positioning is not completely set.\n@mixin adBugPosition($loc: null) {\n  $bottom: str-index($loc, bottom);\n  $right: str-index($loc, right);\n  @if $bottom==null {\n    top: 7px;\n  }\n  @else {\n    bottom: 7px;\n  }\n  @if $right==null {\n    left: 7px;\n  }\n  @else {\n    right: 7px;\n  }\n}\n\n$ad-bug-position: '$TEMPLATE_TEXT[ad_bug_position]';\n$images: (main-image: '$TEMPLATE_IMAGE[main_image]');\n.ad__content {\n  cursor: pointer;\n  position: absolute;\n  background: transparent url(map-get($images, main-image)) no-repeat 50% 50%/cover;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: 1;\n  &:before {\n    content: 'ADVERTISEMENT';\n    font-size: 10px;\n    color: $TEMPLATE_COLOR[ad_bug_color];\n    position: absolute;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n    z-index: 2;\n    padding: 2px 4px;\n    border-radius: 4px;\n    @include adBugPosition($ad-bug-position);\n  }\n}\n\n.ad__accessibility {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n","js":"document.querySelector('.ad__content').addEventListener('click', function() {\n  AD.clickthrough();\n});\n","large_backup_image":null,"main_image":"https://hymnal-prod.vox-cdn.com/uploads/asset/file/118714/anassner_210304_ECL1039_Apr_HouseAds_1400x510.gif"}},
  clickthroughUrl: 'https://eaterwineclub.com/?utm_campaign=pronounce&utm_content=vm_housead_1400x510&utm_medium=internal&utm_source=voxmedia',
  trackers: []
};

var script = document.createElement('script');
script.src = 'https://cdn.concert.io/hymnal-ad-sdk/master/latest/sdk.standard-build.1.0.js';
document.body.appendChild(script);
