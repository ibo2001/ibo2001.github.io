'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "89fa90e2dd28a915f2a67d41c2432293",
"version.json": "6b1cff5f42cb0cc5259c06e376f3a7d1",
"splash/img/light-2x.png": "25d4c7c11febe919a224fc20b8c06fc6",
"splash/img/dark-4x.png": "648e9ade8ace2e121d84441456648a0b",
"splash/img/light-3x.png": "656f7ed2d51ce3f3ad3211cd4c9479b5",
"splash/img/dark-3x.png": "656f7ed2d51ce3f3ad3211cd4c9479b5",
"splash/img/light-4x.png": "648e9ade8ace2e121d84441456648a0b",
"splash/img/dark-2x.png": "25d4c7c11febe919a224fc20b8c06fc6",
"splash/img/dark-1x.png": "889726d7ec18c430ef6504aa5c0dc13d",
"splash/img/light-1x.png": "889726d7ec18c430ef6504aa5c0dc13d",
"index.html": "1fe94dbba8116b31ca0e729987f83be0",
"/": "1fe94dbba8116b31ca0e729987f83be0",
"main.dart.js": "2a4ea9ebec025bebcfce5e8751ab252e",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/favicon.ico": "ec33baab556d331be9262970600acbe1",
"icons/apple-touch-icon.png": "37392c8639344a01b4ffa35f2f686521",
"icons/Icon-192.png": "97734896c44ee8bec5de47b07b423c6c",
"icons/Icon-maskable-192.png": "97734896c44ee8bec5de47b07b423c6c",
"icons/icon-192-maskable.png": "814bd4b389072b71376ec77c6cb1e039",
"icons/icon-512-maskable.png": "7147721dd77fa70b2d3f7f2764d7fa10",
"icons/Icon-maskable-512.png": "46ec50eefdd2f4843317beec58e62a27",
"icons/Icon-512.png": "46ec50eefdd2f4843317beec58e62a27",
"manifest.json": "44c4114767167ce769dc5573e7e69e67",
"assets/AssetManifest.json": "f2a9f81f8cab3929987c7e6d63f84893",
"assets/NOTICES": "fdc776255cd00b69fa8e10c08370cd38",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "d55dd84e13d183d754c05efb8a2cd166",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "80f7466e6114bc7f5d5b0cfa8ee78051",
"assets/fonts/MaterialIcons-Regular.otf": "ec2918ba97c111f0e2d180a8487300a7",
"assets/assets/images/building_properties_hud.svg": "1a53afe930ad3ee8419b88cba3240ed6",
"assets/assets/images/adv_1.png": "1f0d02922251bd2080c99f839742b07b",
"assets/assets/images/adv_3.png": "1eba53140dfac97614963a02fc66b243",
"assets/assets/images/adv_2.png": "621b346e8687344589d43d61afa8db89",
"assets/assets/images/emarapro_logo.svg": "ac15ad7c4a4af04787a51ca3eeb82972",
"assets/assets/images/home_slider_02.png": "d4267a5898d4c8c7fa2fb771fb3d9536",
"assets/assets/images/adv_in_1.png": "39d739438db355229011abdb6a9bfd62",
"assets/assets/images/adv_4.png": "6d517d69217a56abb0fbe6cfc45cb41c",
"assets/assets/images/units_screen_hud.svg": "90e3b0acd00c6df076c0b3bbe37dad45",
"assets/assets/images/emarapro_logo.png": "afde26fae1dc0cad7047782fbbfc7404",
"assets/assets/images/buy_now_banner.png": "f1b065a1b7aba4e840c2cbf75aca2ec6",
"assets/assets/images/adv_building_1.png": "03f040191bcadeda54bfda833f309690",
"assets/assets/images/service_img.png": "c19eb44c0d5ceee910717967aa82c6bf",
"assets/assets/images/adv_building_0.png": "2efb2135382efeae5071d75e84d40201",
"assets/assets/images/top_home_adv.png": "81c63379dabe11aa7330e02a3e24e5d2",
"assets/assets/images/treasurer_screen_info.svg": "9d37f76ea5e908bf58e826a4090c799b",
"assets/assets/images/mobile_in_hand.svg": "8149f3327896be4e1414475a35ac5514",
"assets/assets/images/building_structure_hud.svg": "a3c7a68545c87cc3626c5c44b3279f91",
"assets/assets/images/building-structure.svg": "d2bc2f12334debb6bcdf64ccc1dcda89",
"assets/assets/images/logo.png": "41b5eb7a81ef65c7e144002ccfb81e2f",
"assets/assets/images/adv_4_wide.png": "033564cfaa01f39c1760a5ff2d5d4dde",
"assets/assets/images/building_and_person.svg": "00fad90ec46a547a518b47256a11bd2c",
"assets/assets/images/Adv_3_full_size.png": "d842918cfe30ce1c48b252af9eee9ba1",
"assets/assets/images/guide_1.svg": "5252bc0c31e18b674f1f787577680488",
"assets/assets/images/property_slid_03.png": "0bf2b3bdc968647d7b9325d5226d4778",
"assets/assets/images/adv_small_2.png": "a55fdcb97965786946de0777fd66c4fd",
"assets/assets/images/home_slider_1.png": "7b753309b4d08020b581f12e3bc76045",
"assets/assets/images/mobile_in_hand.png": "e5220606ead1a30749960a30daa05f35",
"assets/assets/images/adv_small_3.png": "01e8466a344385b5374a8fc4e80f103f",
"assets/assets/images/property_slid_02.png": "d4267a5898d4c8c7fa2fb771fb3d9536",
"assets/assets/images/guide_2.svg": "fe2c4292c0269a2c66cd24279eec2626",
"assets/assets/images/building.svg": "bfa070910061be5a10864b91ebce9efc",
"assets/assets/images/adv_small_1.png": "28263e0dced8bdaedb0af4ff4c436398",
"assets/assets/images/home_slider_3.png": "5a2aa39f1288b8c341e863b4e4caea60",
"assets/assets/images/home_slider_2.png": "4c04b39b5b0f130dd92474a91fd3214b",
"assets/assets/images/units_screen_info.svg": "eb18c300c7a3c1e44ef8d29959b09bae",
"assets/assets/images/property_slid_01.png": "c563da1c5793c8425b420b83beed94ae",
"assets/assets/images/guide_3.svg": "d2f84e36216a7b14d6b7a9d641debdaf",
"assets/assets/icons/painting.svg": "1bf5bcf331b993677e8d144eb305ebde",
"assets/assets/icons/red_circle_calendar.svg": "6d2f5123b5a0844d3e1913a4deeb58d1",
"assets/assets/icons/custody_24px.svg": "f2982e2190e8911b49ac936275940ee8",
"assets/assets/icons/search.svg": "4f8e930f4acc88c57b6e7548dcf489fb",
"assets/assets/icons/floors_34px.svg": "5db7fca155efdd5e6bc8b3750f76daa0",
"assets/assets/icons/market-button.svg": "27da35c5a423d470c019ceef35d84d13",
"assets/assets/icons/add_contacts.svg": "24a56a4287782dda376478169738e544",
"assets/assets/icons/building_needs.svg": "b108c9773e848c17f6d0304c637efc9a",
"assets/assets/icons/red_whatsApp.svg": "49d97777b5614d69ae092edd2107e731",
"assets/assets/icons/bbackkup.svg": "a81434381f4604fea43c0eea1cd6df32",
"assets/assets/icons/gray_phone.svg": "85ada484f315376647eb7713a560cbd1",
"assets/assets/icons/bed.svg": "58e06983174fe0c281c9c47fc93f942a",
"assets/assets/icons/unpaid_revenues.svg": "e3b44b5450e00323ea24c6c93ab74104",
"assets/assets/icons/no_data_unit.svg": "3bad2458949660b8860d200f9d700b2f",
"assets/assets/icons/opening_budget2.svg": "9f0d82d4cf6232b8650bbae6aafeba70",
"assets/assets/icons/share_image.svg": "d52dcdee60c58c707d44b66fb96342ff",
"assets/assets/icons/wifi.exclamationmark.circle.fill.svg": "63e99f58fc5090191ec1e319694139ce",
"assets/assets/icons/arrow_occordion_right.svg": "91cc9afcfda55622b4ae75b225115be2",
"assets/assets/icons/clock_circle_fill.svg": "0b429f424382e8a14e451b41e2ca45a0",
"assets/assets/icons/building_loan.svg": "97587d706e133336eda6d07795541d0d",
"assets/assets/icons/topleft_corner_checkmark.svg": "58ba45fc71b7dd9b9c162a45bb287503",
"assets/assets/icons/unite_lived_on.svg": "d5bde8ff75654ad6837f6ec232b1b9c7",
"assets/assets/icons/save_image.svg": "e8f493c95b85fe95cfebf221f8dbcab1",
"assets/assets/icons/info_details_24px.svg": "14f917c68c6f7f60ae6376daf2008bb8",
"assets/assets/icons/person.svg": "5fa23577f027e478505840ddd4d11852",
"assets/assets/icons/printing.svg": "4c603890eb8c1415b96ffe287acf1a7c",
"assets/assets/icons/split_equally.svg": "376583be09ea5eb34467b131ff8de09f",
"assets/assets/icons/warrning_yellow.png": "7f079389e9bb28ab2c3037fa0b54ff43",
"assets/assets/icons/undefined_revenue.svg": "081a4aad431fad654fe43995eb06f408",
"assets/assets/icons/debt_and_arrears.svg": "1e64cba42f78a1f9a697660e9a6b7304",
"assets/assets/icons/add_icon.svg": "60d8a51c7db1de3d3ffd460c18321848",
"assets/assets/icons/cooking.svg": "66b6d790e3bb0ecb80b9549ed2d00c86",
"assets/assets/icons/electric.svg": "46ce2e52d41cc57ef708ca57383fd17d",
"assets/assets/icons/services.svg": "424951256490f8b014f62e3914dda8e6",
"assets/assets/icons/service-button.svg": "50e7f0fb69d554fc49c8dbd093990a7e",
"assets/assets/icons/primary_whatsApp.svg": "072d43b9bd09779b346d3444d7a8f65d",
"assets/assets/icons/split_by_amount.svg": "fd95fecb910de3476fa1cabe351fdb33",
"assets/assets/icons/timer.square.svg": "ea05289822474bd1cf0f42d8492f121f",
"assets/assets/icons/no_groups.svg": "055b13b1bba41376e481d79f85ec47e3",
"assets/assets/icons/unite_numbering.svg": "0f3295221efdcdb9ea811ead63bba9ef",
"assets/assets/icons/xbadge.svg": "379bcb6656a55e710f81c3020b7ae342",
"assets/assets/icons/unit_status.svg": "bd6410b4165cb3d8984f0b91101a04c8",
"assets/assets/icons/arrow_right_icn.svg": "a269c3565ca83bcdfc548c9c069880b6",
"assets/assets/icons/unit_floor__24px.svg": "00eca9146f1abaf6c9639b2a91d4da34",
"assets/assets/icons/building_circle.svg": "c6a09125729d39a026781d9b35c0d3d5",
"assets/assets/icons/monthly_subscription_delete.svg": "6c80f7f193f0724f7a239c34dd9d8eed",
"assets/assets/icons/no_debt.svg": "d9a20a74fe31d3b4d088cee64dfbcd25",
"assets/assets/icons/state-layer.svg": "880f167aa2f6dad49389b7eafe403999",
"assets/assets/icons/question_circle.svg": "99e029192cf3532351d964222f5e235d",
"assets/assets/icons/new_project_or_debt.svg": "a725f12279cda41f3b05c7a8bcb69306",
"assets/assets/icons/suggest.svg": "7877c6ab54078cdb281cb89bc0be2cef",
"assets/assets/icons/volunteer.svg": "843d49e20b72049c62715d0eff94e5ca",
"assets/assets/icons/picker_units_col.svg": "96bbaa31783b37f398d2b79caca0d00a",
"assets/assets/icons/yellow_warning_triangle.svg": "682d3786ebfd0a1899745e058be07bf2",
"assets/assets/icons/minus_badge.svg": "1021eb4d1418afcd38368e1855a90b16",
"assets/assets/icons/red_circle_reload.svg": "8dfe3142c59804050adc3a540e30c496",
"assets/assets/icons/bathtub.svg": "24598224f3cf39cad57eb34618c86559",
"assets/assets/icons/unit_details.svg": "78b6e7eaf78c7db539299d1598c2586b",
"assets/assets/icons/restore_icon.svg": "244b8edc13d24f6538d55408fbbbf115",
"assets/assets/icons/wallllet_24px.svg": "199d3e1fd5fddc1962265a86867344d6",
"assets/assets/icons/reports_icon.svg": "cdc7736c14cb01723e512cc23b8efe0f",
"assets/assets/icons/mail.svg": "804a4f33895cbee833f0fa5acb0b389b",
"assets/assets/icons/top_right_x.svg": "27880f0dae386500224d97e1d6d58433",
"assets/assets/icons/download.svg": "1be901b6f9f64cbda9b3e880a9ad351f",
"assets/assets/icons/key.card.svg": "12ecf42fd1a64affb930fd661463a53c",
"assets/assets/icons/unit_tenant.svg": "46822628d0be4e28453ae9f8009d454c",
"assets/assets/icons/building_safe_24px.svg": "24c1678e3beab192aa8e335885060c21",
"assets/assets/icons/camera_circle.svg": "e690d5169c7ac2098e13e8d676349c2e",
"assets/assets/icons/share_caese.svg": "615d2da1c599df25a690a4c5e50ae159",
"assets/assets/icons/account_balance_bank.svg": "ea16f576f0b0f031d671b94dfdee5955",
"assets/assets/icons/pay_monthly.svg": "3775430b42e5eb8e4cc12ee11e3f7858",
"assets/assets/icons/user_details_card.svg": "793c412525b443cdc82af931d30dec24",
"assets/assets/icons/emarapro_logo.png": "41b5eb7a81ef65c7e144002ccfb81e2f",
"assets/assets/icons/our_services_tabbar.svg": "38349f9719d1ed87c758bbda6bf45c60",
"assets/assets/icons/circle_down_triangle.svg": "5125f4598e5f8ab34de54c730125b11d",
"assets/assets/icons/landord.svg": "2a605a597a7f24e99a95fe7d6fe2e813",
"assets/assets/icons/triangle_right_green.svg": "c8fa9955dc4f45635573d9c997fda235",
"assets/assets/icons/edit_building.svg": "d1f88c8d255a9e06bdd9836fdf3a286a",
"assets/assets/icons/green_phone.svg": "7d69a96c0b0699accf2d7c841c5c2d06",
"assets/assets/icons/wallet.svg": "d16683c751b6f8a7cd9e5d04ca2a27de",
"assets/assets/icons/add_expenses_icon.svg": "fbe79f7fe3de8ea9f4a8b50d194be7a7",
"assets/assets/icons/cleaning_soup.svg": "9eadf030254182a45862068d3d5ee6a4",
"assets/assets/icons/flat_own.svg": "7c36b285551007707887671b3d1ddd48",
"assets/assets/icons/owner.svg": "e375c62e24d07bd052fe232443781b1f",
"assets/assets/icons/checkmark_badge.svg": "921f7d8540375fa4edff0d7d54458c1e",
"assets/assets/icons/add_revenues_icon.svg": "25f1bcffefd4aff3f535c507545e14fe",
"assets/assets/icons/cashier_bonus_stars.svg": "09c511973414b544e6ab3ae2a0099714",
"assets/assets/icons/emarapro_logo_horizental.svg": "f4492065ba8b89e603d23e0ca21a8336",
"assets/assets/icons/minus_icn.svg": "f44a271483688d93ac9377a9874dec31",
"assets/assets/icons/house_question_mark.svg": "b2d730ee7ccf6f9f045ccda6a8773afc",
"assets/assets/icons/check.svg": "e16d887f81f554d3a0da99042770bddd",
"assets/assets/icons/warning.svg": "6664581c643ef551dba127593fc28b52",
"assets/assets/icons/phone_circle.svg": "897fff113ba4e83a6d603091252a6403",
"assets/assets/icons/add_spei_revene.svg": "40dc99bcba49358249ef3567493cd598",
"assets/assets/icons/approval_delegation.svg": "2fe49b3df7dbac844395c808e30a2eac",
"assets/assets/icons/expenses_icon.svg": "aadfbac32bc6c12c13a7989c9914a97e",
"assets/assets/icons/repair_contact.svg": "018c8c053cd19eb542c0896e49a13a6b",
"assets/assets/icons/area.svg": "7148262905bfaa17a768139634653538",
"assets/assets/icons/loan_unite.svg": "985bedd27df2fe0c3ae2c202f3afd652",
"assets/assets/icons/share_report.svg": "4db0fe48c206c809b9ba58fc5af28e47",
"assets/assets/icons/Badges_pay_no_off.svg": "2f88a72ddd43cfffbf8954e8e429dece",
"assets/assets/icons/today.svg": "d09783a97db0e20db632ad3bfdbba699",
"assets/assets/icons/exclamationmark.circle.svg": "416e77bc626071bc7aaf8da846d0f8a4",
"assets/assets/icons/mic.svg": "d253153dede1fa4293407cdd790c8e90",
"assets/assets/icons/unit_owner.svg": "508cefc3d44f1ee55bf8115907040648",
"assets/assets/icons/cleaning_worker.svg": "4eb91a99a8f88a36a3ba20d08db4c7fb",
"assets/assets/icons/check_circle.svg": "735c1567657d972d82510db44abd5c2f",
"assets/assets/icons/send_24dp.svg": "b2ad9260edb0458d2cc893a276df485b",
"assets/assets/icons/warning_circle.svg": "c383ec33b758af8866a6371e12ee6471",
"assets/assets/icons/info_circle.svg": "e5ed42a6cd60388330727b9d30f91f48",
"assets/assets/icons/furniture.svg": "3a3f92502ddd7308d05872190ee49969",
"assets/assets/icons/pay_group.svg": "3d9935262a5f95e9691d68902e88f83e",
"assets/assets/icons/lamp.svg": "9fc78735e0a0f1d63ee64e64dd567d48",
"assets/assets/icons/show_item_list_as_icons.svg": "3d1543657c3464a86007b1765b822b9c",
"assets/assets/icons/warning_24_solid.svg": "9135ddcce7cf78431fdd261679c8ab76",
"assets/assets/icons/pesticides.svg": "375e72d32cfe7a8ebd3af3d52fb6dd00",
"assets/assets/icons/box_more_less.svg": "fa6a8791797138922c88bf0d489d954f",
"assets/assets/icons/green_whatsApp.svg": "f00af474ac7ed3bdb9425fdd5bca655f",
"assets/assets/icons/camera_control.svg": "438426ba0c83c94cb0a298f5b795b402",
"assets/assets/icons/notification.svg": "a8c8b5ae7f1cc84ee37819f92390218e",
"assets/assets/icons/budget.svg": "542cfc749c428f6f04de6d34e27a74b5",
"assets/assets/icons/primary_phone.svg": "fb46adbb7f60f2e5079926bdb244d97f",
"assets/assets/icons/fixing.svg": "8bf544e3417813cfe44a73c39e542545",
"assets/assets/icons/whatsapp_icon.svg": "81c9181a5f486b976b89ea720c876ff8",
"assets/assets/icons/camera.svg": "fd0fa135706a51b5b1759b0dddc5be9c",
"assets/assets/icons/split_by_shares.svg": "446e3629b0d3cffe659d70fa15ddedf2",
"assets/assets/icons/units_indebtedness_sold_nobg.svg": "5592a69ac92ef4ed922d5589904b8362",
"assets/assets/icons/expand_down_small24px.svg": "7f5b9bb9f4784d0f80a2ef3524084505",
"assets/assets/icons/plus_icon.svg": "d6fa976f382fed0f9085c0005981c676",
"assets/assets/icons/security.svg": "bb9e288c73a7ada007cf112ebd9bee0b",
"assets/assets/icons/plumping.svg": "c88c100c2e14a5600a613746ba19d822",
"assets/assets/icons/revenu.svg": "e398d43063588441c0feee24f29d1dd1",
"assets/assets/icons/gray_whatsApp.svg": "2743e8a1012c1060690298a42a7645e9",
"assets/assets/icons/trash.svg": "a15e412022a18fe070bfddea6425fdb8",
"assets/assets/icons/show_item_list_as_list.svg": "19037c92a0eda9aece6015c18fc0b3a5",
"assets/assets/icons/person_group.svg": "5c992275fb0f1a55a819842cb1b48d4e",
"assets/assets/icons/phone_book.svg": "ec0b2a9137ca78edbeea78f48cb53d2c",
"assets/assets/icons/plus_40px.svg": "d16d2c797a4ce808ca3de85c352413bc",
"assets/assets/icons/no_monthly.svg": "aecf6224966b8a423faa7b2709c2f18d",
"assets/assets/icons/purchases.svg": "704f9252908bb149ae3ea8ececcb07db",
"assets/assets/icons/report_home.svg": "ff9660b1949d27a22d8765d40ff09aec",
"assets/assets/icons/whight-logo.svg": "27101b148bd56d62ca6d63f608861232",
"assets/assets/icons/red_phone.svg": "eb043f11ee82858661e63149638e4818",
"assets/assets/icons/contact_x.svg": "17f2bfb7e02a70b75effbcfe40b4b349",
"assets/assets/icons/location_24px.svg": "7b4a18491c640ae9c85e8f27b001c3fb",
"assets/assets/icons/my_location.svg": "582beb9120aa21b901733de2a41ef4b3",
"assets/assets/icons/emarapro_logo_icon.svg": "ed0b61a2c3f182906f0a4c348a1e124a",
"assets/assets/icons/bank_circle.svg": "cc05a6ba06672271867880d511c89985",
"assets/assets/icons/custody.svg": "0ad60eb3e22793700314c5f8d5e2bee5",
"assets/assets/icons/addDebt.svg": "c6cda43d5ce4098eeb623c1bad94bde2",
"assets/assets/icons/back_icon.svg": "00512da949b8d531851005d445d908ad",
"assets/assets/icons/pencil.svg": "186414081ddb89fdfdd620b6b28a988a",
"assets/assets/icons/attach_file.svg": "dbfab3674f4b66218db4c102ae1f1197",
"assets/assets/icons/language.svg": "5b47d42d8945cbdbf8960ed45046b4e5",
"assets/assets/icons/location_circle.svg": "1ad5674ca6fd68d1bd85caa9bfb3bd1e",
"assets/assets/icons/paid_revenues_monthly.svg": "721856dbb8590cadc1764c5d5aa7877b",
"assets/assets/icons/water_tank.svg": "cefaec60967df32ed80ed61020ed4fcc",
"assets/assets/icons/person_key.svg": "4c6085a83e633ecdc643f6e28edf47f5",
"assets/assets/icons/emarapro_logo_icon.png": "4f6c8b557e88cc4b06f88157474f9343",
"assets/assets/icons/mobile.svg": "19552173e5d0804d2dde981378af082f",
"assets/assets/icons/building_icon.svg": "edddc2fd56c056f2e95ea4e071cc4f5d",
"assets/assets/icons/record_benefit.png": "6c97a513a02d1292c1dbcea602c477c8",
"assets/assets/icons/market_24px.svg": "c5ee4ff582e4ebf76524e46fd80378fa",
"assets/assets/icons/error_phone.svg": "c4b0e54a3916283fe0e0684092f33275",
"assets/assets/icons/unite_count_on.svg": "35c3c4f41a74a34606d74e8c5642c0ea",
"assets/assets/icons/share.svg": "9b81ea6064665e80958a34da765e9308",
"assets/assets/icons/sort.svg": "17bb201af505fc972f9d322268659658",
"assets/assets/icons/unit_loan.svg": "89a8374f322114961bdb163b4af6136c",
"assets/assets/icons/filter.svg": "88154c6c59c03b703ece16ff160f862e",
"assets/assets/icons/water.svg": "1b7ffcb9ed39755138aec5a36991146a",
"assets/assets/icons/monthly_subscription.svg": "85c77bf79cd3f7e8753aa100dd8ae0f4",
"assets/assets/icons/net_profit.svg": "5e9cd6930ce55b681127cac1f4fd4b79",
"assets/assets/icons/show_item_list_as_groups.svg": "1225820b9cecb9d1cbc469958d0768e3",
"assets/assets/icons/total_revenue.svg": "5b626c165c02a104601a325e2a4840f5",
"assets/assets/icons/picker_floor_col.svg": "0abc16ed8b4ba0165c9db3791f0b206e",
"assets/assets/icons/opening_budget.svg": "0df4e39fa055563f6885f27270070237",
"assets/assets/icons/manager.svg": "74152e5e740df4ba9a7b658d87a8ca5e",
"assets/assets/icons/reports_tabbar.svg": "083a15c789c12bae0648366fde9203e0",
"assets/assets/icons/arrow_occordion_left.svg": "2f95f8d95dcccae90c8524878b816206",
"assets/assets/icons/triangle_up.svg": "ccfacd35012132ab9e8bf63a155aa0b9",
"assets/assets/icons/error.svg": "6a72114539ce4fb86787218ce2f80b7c",
"assets/assets/icons/chair.svg": "4f6e66a0f07ed8312917fac1fa314ae8",
"assets/assets/icons/building_tabbar.svg": "a98f70fe02576f0aa77b1ee971547a21",
"assets/assets/icons/intercome.svg": "5fdf8caae148229126f90319d1a89498",
"assets/assets/icons/triangle_right_red.svg": "1501fd2437493db0da4e4f55ecbfc98c",
"assets/assets/icons/app_logo_circle.svg": "5a6b88febebac63c4eab9b4eda265535",
"assets/assets/icons/worker.svg": "fe4bc84aa9414efaa0bb67e465b99a0f",
"assets/assets/icons/elevator.svg": "3f86299c612586329177313ccdb64611",
"assets/assets/icons/user_details.svg": "3bae0a2cb400cfb9e71662b3ec406354",
"assets/assets/icons/market_circles.svg": "f14767bee84da7c55b31f2692977acd9",
"assets/assets/icons/unpaid_revenues_monthly.svg": "601c7635443d46a1119934af0c473cf7",
"assets/assets/icons/triangle_down.svg": "b763db2f5f0fca336c138ee1ae0bbcd6",
"assets/assets/icons/statistics.svg": "dfd0eb9031d14009edaf9919dcf1c040",
"assets/assets/icons/help_circle.svg": "3c7e2bab3b7086e7b68293f93f55a640",
"assets/assets/icons/paid_revenues.svg": "abc83fe2613594f744648c878f4d023e",
"assets/assets/icons/history.svg": "de18a3d490777f7de33dcd8af0aec10a",
"assets/assets/icons/garden.svg": "49db73424626f45f66194f73b1861e11",
"assets/assets/icons/back_delete.svg": "10fa74d429522e8e1137b1d10fbf8b17",
"assets/assets/icons/help_icn.png": "2f987be543a3dc1f7e6680f0ec42b0cc",
"assets/assets/icons/circle_up_triangle.svg": "21c37822b251bd4adb0a27928d71eb2d",
"assets/assets/icons/custody_raw.svg": "f2982e2190e8911b49ac936275940ee8",
"assets/assets/icons/carpentry_works.svg": "d5c7b6bcb09d99ae32860d05456a2fb4",
"assets/assets/icons/liked_24.svg": "d0ad30a12811010e2ce17f6c6b2448c6",
"assets/assets/icons/add_debt_icon.svg": "f6cad3006baad14b41cd59512f0ed005",
"assets/assets/icons/my_invoice24px.svg": "56dcdad67bfa5ea9a0a1c844aebf331d",
"assets/assets/icons/close_24px.svg": "54a7e80aca1359c5ad3ff45318ad7eb7",
"assets/assets/icons/proposal.svg": "35a652e3832a344a392ad0123a0537b3",
"assets/assets/icons/building_needs_icon.svg": "871eefae4283c641d766db083b15456b",
"assets/assets/icons/expenses_defualt.svg": "5765060cfdffe84300de81b36615d50c",
"assets/assets/icons/location_benefit.png": "f64cb73de4d013912099999d333b6a8d",
"assets/assets/icons/cleaning.svg": "42fda5072631efac58c1e7e38117392e",
"assets/assets/icons/warning_multi_circles.svg": "3443e167b7d32f864b74244b081667fb",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
