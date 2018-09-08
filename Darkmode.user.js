// ==UserScript==
// @name          Runescape wiki DarkMode
// @namespace     https://github.com/CephHunter
// @description	  A dark theme for the Runescape wiki
// @author        CephHunter
// @homepage      https://github.com/CephHunter/RS-wiki-DarkMode#readme
// @supportURL    https://github.com/CephHunter/RS-wiki-DarkMode/issues
// @include       http://runescape.wikia.com/*
// @include       https://runescape.wikia.com/*
// @include       http://*.runescape.wikia.com/*
// @include       https://*.runescape.wikia.com/*
// @run-at        document-start
// @version       2.0.2
// ==/UserScript==
(function() {var css = `
.WikiaArticle .infobox,
table.TablePager,
table.article-table,
table.wikitable {
  background-color: #323232!important;
  color: #c5c5c5!important;
  border: none!important
}
#EditPageDialog.preview .modalContent .ArticlePreview,
#FounderProgressWidget .preview .activities .activity,
#FounderProgressWidget .preview .activities .activity.active,
#MyToolsConfigurationWrapper .options-list,
#MyToolsConfigurationWrapper .search-box,
#UserProfileMasthead .masthead-avatar .avatar,
#WikiaPhotoGallerySearchResults,
#editpage-specialchars,
#mp-poll-prev-results .hover,
.EditPageEditor #diff,
.EditPageEditor .editpage-editarea,
.QuickStatsWidget .WikiaDataTable tbody tr,
.QuickStatsWidget .WikiaDataTable tbody tr td,
.WikiaPage,
.WikiaRail #wikia-recent-activity .community-page-rail-module .wds-avatar,
.editpage-intro,
.insights-container-nav .insights-nav-item,
.insights-header-sorting,
.insights-list-cell,
.mmgtable-details,
.modalWrapper h1,
.ogg-player-options,
.oo-ui-bookletLayout-outlinePanel,
.oo-ui-widget-enabled:hover,
.preview_box,
.preview_box .preview_icon,
.ve-ce-tableCaptionNode,
.ve-ce-tableCellNode,
.ve-spinner .content,
.ve-ui-surfaceWidget-surface,
.ve-ui-wikiaCartWidget-wrapper,
.ve-ui-wikiaSingleMediaCartOptionImage,
hr,
table,
table.TablePager td,
table.TablePager th,
table.article-table td,
table.wikitable td {
  border-color: #52555a!important
}
#GlobalNavigationWallNotifications,
#PageHeader .page-header__categories-dropdown .page-header__categories-dropdown-content,
#PageHeader .page-header__languages .wds-dropdown__content,
#ca-addsection+div.wds-dropdown .wds-dropdown__content,
#ca-edit+div.wds-dropdown .wds-dropdown__content,
#ca-ve-edit+div.wds-dropdown .wds-dropdown__content,
#ca-viewsource+div.wds-dropdown .wds-dropdown__content,
.WikiaBarWrapper .tools-menu,
.attribute-total .attribute-value,
.attribute-total td,
.attribute-total th,
.attribute-value,
.infobox-bonuses th,
.insights-list-header,
.oo-ui-popupToolGroup .oo-ui-toolGroup-tools,
.wds-dropdown__content,
.wds-dropdown__content .wds-dropdown-level-2__content,
.wikia-menu-button ul,
table.article-table th,
table.smwb-factbox tr.smwb-center td,
table.smwb-factbox tr.smwb-ipropvalue th,
table.smwb-factbox tr.smwb-propvalue th,
table.smwb-factbox tr.smwb-title td,
table.smwb-ifactbox tr.smwb-center td,
table.smwb-ifactbox tr.smwb-ipropvalue th,
table.smwb-ifactbox tr.smwb-propvalue th,
table.smwb-ifactbox tr.smwb-title td,
table.wikitable th {
  background-color: #2b2b2b!important;
  border-color: #52555a!important
}
.lighttable .highlight-over {
  background-color: #236100!important
}
#modal #cioTotals,
.lighttable .highlight-on {
  background-color: #1e5400!important
}
table.jquery-tablesorter.sortable th.headerSort .chevron,
table.jquery-tablesorter2 th.headerSort .chevron {
  border-color: #c5c5c5 transparent transparent!important
}
table.jquery-tablesorter.sortable th.headerSort .chevron:first-child,
table.jquery-tablesorter2 th.headerSort .chevron:first-child {
  border-color: transparent transparent #c5c5c5!important
}
.GE-set-cost tr:last-of-type td,
.GEChartBox,
.WikiaRail .module,
.WikiaRail .rail-module,
.navbox .navbox-group,
.navbox .navbox-subgroup .navbox-group,
.navbox .navbox-subgroup .navbox-title,
.table-na,
.ui-dialog .ui-dialog-buttonpane {
  background: #2b2b2b!important
}
table.wikitable td[bgcolor],
table.wikitable td[style*=background],
table.wikitable th[style*=background],
table.wikitable tr[bgcolor] td,
table.wikitable tr[style*=background] td {
  color: #3a3a3a!important
}
table.wikitable td[bgcolor] a,
table.wikitable td[style*=background] a,
table.wikitable th[style*=background] a,
table.wikitable tr[bgcolor] td a,
table.wikitable tr[style*=background] td a {
  color: #438ab5!important
}
table.TablePager td {
  color: #c5c5c5!important;
  background-color: #323232!important
}
.tabberlive ul.tabbernav li a:hover,
table.TablePager tr:hover td {
  background-color: #3f3f3f!important
}
.ve-spinner .content,
table.TablePager th {
  background-color: #2b2b2b!important;
  color: #c5c5c5!important
}
#viewingnew-warning,
#viewingold-warning,
.WikiaArticle .thumbinner,
.WikiaArticle .toc,
.article-thumb,
.extimage,
.forumsearchbox,
.gifresize,
.musicplayer,
.questdetails,
.shortcut,
td.famtreeleaf {
  background-color: #323232!important;
  color: #c5c5c5!important;
  border: 1px solid #52555a!important
}
.WikiaArticle .thumbinner,
.article-thumb,
.extimage,
.gifresize {
  background-image: none!important
}
.WikiaArticle .thumbinner .caption,
.WikiaArticle .thumbinner .thumbcaption,
.article-thumb .caption,
.article-thumb .thumbcaption,
.extimage .caption,
.extimage .thumbcaption,
.gifresize .caption,
.gifresize .thumbcaption {
  width: auto!important;
  color: #c5c5c5!important;
  border-top: 1px solid #52555a!important
}
#FounderProgressWidget .preview .activities .activity .description,
#FounderProgressWidget .preview .activities .activity.active .description,
.rsw-tooltip {
  background: #262626!important
}
#GEchartpopup a,
#mp-recent a,
.AdminDashboardHeader h1 a,
.community-page-card-module .community-page-card-module-full-list-link,
.js-tooltip-wrapper a,
.modalWrapper>h1,
.mw-scribunto-input,
.rsw-tooltip a,
.timeline-Viewport .customisable {
  color: #6bbaea!important
}
#rsw-config {
  border-color: #2f69a8!important;
  box-shadow: 0 10px 60px 0 #000!important
}
#rsw-config #rsw-config-header {
  background-color: #2b2b2b!important;
  color: #c5c5c5!important;
  border-bottom-color: #52555a!important
}
#rsw-config #rsw-config-footer {
  background-color: #2b2b2b!important;
  color: #c5c5c5!important;
  border-top-color: #52555a!important
}
#globalNavigation,
#modal,
#rsw-config #rsw-config-body,
.modal.large section,
.modal.medium section,
.modal.small section,
.wds-global-navigation__account-menu,
.wds-global-navigation__link,
.wds-global-navigation__logo,
.wds-global-navigation__notifications-menu,
.wds-global-navigation__search,
.wds-global-navigation__search-input,
.wds-global-navigation__start-a-wiki,
.wds-global-navigation__user-menu,
.wds-global-navigation__wikis-menu {
  background-color: #1e1e1e!important;
  color: #c5c5c5!important
}
#CreatePageDialog input,
#MyToolsConfigurationWrapper .search-box input.search,
#MyToolsRenameItem .input-box,
#averagepopup,
#extraItempopup,
#modal #cioItem,
#mw-scribunto-input,
#rsw-config #rsw-config-body #rsw-config-delay input,
.EditPage .CategorySelect .categories,
.WikiaForm .input-group [type=email],
.WikiaForm .input-group [type=password],
.WikiaForm .input-group [type=text],
.WikiaForm .input-group [type=url],
.WikiaForm .input-group textarea,
.WikiaPage input:not([type=submit]):not([type=button]):not([type=reset]):not([type=checkbox]),
.WikiaPage select,
.highcharts-range-selector,
.modalWrapper input:not([type=submit]):not([type=button]):not([type=reset]):not([type=checkbox]),
.modalWrapper select,
.oo-ui-inputWidget input,
.ui-dialog input:not([type=submit]):not([type=button]):not([type=reset]):not([type=checkbox]),
.ui-dialog select,
textarea {
  background-color: #353535!important;
  color: #c5c5c5!important;
  border: 1px solid #52555a!important;
  box-shadow: none!important
}
#rsw-config #rsw-config-body #rsw-config-delay input::-webkit-input-placeholder {
  color: #9f9f9f!important
}
#rsw-config #rsw-config-body #rsw-config-delay input:-ms-input-placeholder {
  color: #9f9f9f!important
}
#rsw-config #rsw-config-body #rsw-config-delay input::-ms-input-placeholder {
  color: #9f9f9f!important
}
#rsw-config #rsw-config-body #rsw-config-delay input::placeholder {
  color: #9f9f9f!important
}
#GlobalShortcutsSearch .autocomplete-suggestions .autocomplete-group strong,
#GlobalShortcutsSearch .global-shortcuts-field-wrapper,
#MyToolsConfigurationWrapper .options-list li,
#PageHeader .page-header__categories-dropdown::before,
#PageHeader .page-header__languages::before,
#ca-addsection+div.wds-dropdown::before,
#ca-edit+div.wds-dropdown::before,
#ca-ve-edit+div.wds-dropdown::before,
#ca-viewsource+div.wds-dropdown::before,
#rsw-config #rsw-config-body #rsw-config-note,
.LightboxHeader,
.oo-ui-popupWidget-anchored .oo-ui-popupWidget-anchor::before,
.wds-dropdown::before,
.wikia-gallery-item {
  border-bottom-color: #52555a!important
}
#rsw-config-background,
.UploadPhotos .options,
.WikiaPage .WikiaPageBackground,
.blackout,
.navbox,
.navbox .navbox-subgroup,
.wds-global-navigation__search-label {
  background-color: #1e1e1e!important
}
.community-page-rail .community-page-module-box,
.js-tooltip-wrapper,
.js-tooltip-wrapper .js-tooltip-text,
.tabberlive div.tabbertab,
.transcript,
.wikiaThrobber {
  background-color: #262626!important
}
.popover.top .arrow,
.popover.wikiaBar .arrow,
.popover.wikiaBarMessage .arrow,
.tooltip.top .tooltip-arrow {
  border-top-color: #262626!important
}
.popover.right .arrow,
.tooltip.right .tooltip-arrow {
  border-right-color: #262626!important
}
.popover.bottom .arrow,
.tooltip.bottom .tooltip-arrow {
  border-bottom-color: #262626!important
}
.popover.left .arrow,
.tooltip.left .tooltip-arrow {
  border-left-color: #262626!important
}
.popover .popover-inner,
.tooltip .tooltip-inner {
  border-color: #52555a!important;
  background-color: #262626!important;
  box-shadow: 0 0 15px 0 #000!important
}
.EditPageEditor #diff,
.documentation,
.popover .popover-inner .popover-content,
.tabberlive ul.tabbernav li a,
table.diff,
td.diff-addedline,
td.diff-deletedline,
td.diff-ntitle,
td.diff-otitle {
  background-color: #262626!important;
  color: #c5c5c5!important
}
#sp-contributions-footer,
.Search .SearchInput,
.WikiaArticle .noarticletext,
.mw-warning-with-logexcerpt,
.noarticletext,
div.mw-warning-with-logexcerpt {
  background-color: #151515!important;
  border-color: #52555a!important
}
.qtip-bootstrap {
  background-color: #262626!important;
  color: #c5c5c5!important;
  border: 1px solid #52555a!important
}
.qtip-bootstrap .qtip-titlebar {
  background-color: #1e1e1e!important;
  border-bottom-color: #52555a!important
}
#mp-poll-prev-results .hover>div,
.WikiaPage .page-header__separator,
.qtip-bootstrap .qtip .qtip-tip canvas {
  background-color: #52555a!important
}
.ui-widget-overlay {
  background: #1e1e1e!important;
  opacity: .65!important
}
.LightboxCarousel,
.LightboxHeader {
  background-color: #2b2b2b!important;
  box-shadow: none!important
}
.LightboxHeader .wikia-button::before,
.modal.large>footer .close,
.modal.large>header .close,
.modal.medium>footer .close,
.modal.medium>header .close,
.modal.small>footer .close,
.modal.small>header .close,
.ui-icon-closethick {
  -webkit-filter: invert(85%)!important;
  filter: invert(85%)!important
}
.LightboxCarousel,
.WikiaBarWrapper .tools-menu>li,
.WikiaRail #wikia-recent-activity .community-page-rail-module,
.ve-init-mw-viewPageTarget-toolbar {
  border-top-color: #52555a!important
}
.LightboxCarousel .carousel-arrow.next::after,
.editpage-widemode-trigger .arrow {
  border-left-color: #c5c5c5!important
}
.LightboxCarousel .carousel-arrow.previous::after,
.editpage-sourcewidemode-on .arrow {
  border-right-color: #c5c5c5!important
}
#WikiaPhotoGalleryEditorPreview::-webkit-scrollbar {
  width: 13px!important
}
#WikiaPhotoGalleryEditorPreview::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  border-radius: 10px!important;
  background-color: #262626!important;
  border: 1px solid #2b2b2b!important
}
#WikiaPhotoGalleryEditorPreview::-webkit-scrollbar-thumb {
  border-radius: 10px!important;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  background-color: #404040!important;
  border: 1px solid #191919!important
}
#WikiaPhotoGalleryEditorPreview .accent,
#WikiaPhotoGallerySearchResults .accent,
.modalWrapper {
  border-color: #2f69a8!important
}
#WikiaPhotoGalleryEditorPreview::-webkit-scrollbar-corner {
  background-color: transparent!important
}
#WikiaPhotoGalleryEditorPreview .color1,
.navbox .navbox-collapsible .navbox-footer,
.navbox .navbox-collapsible .navbox-title {
  background-color: #2f69a8!important
}
#DisplayClockJS,
#WikiaPhotoGalleryEditorPreview .color1 a,
.discussiontable tr:nth-child(1) th a,
.forumactiveheader a,
.forumarchiveheader a,
.forumoldarchives a,
.oo-ui-buttonElement-frameless>.oo-ui-buttonElement-button>.oo-ui-labelElement-label,
.oo-ui-messageDialog-message,
.oo-ui-messageDialog-title,
.wds-community-header,
.wds-community-header .wds-community-header__counter,
.wds-community-header .wds-icon,
.wds-community-header .wds-tabs__tab-label,
.wds-community-header a {
  color: #dfdfdf!important
}
#WikiaPhotoGalleryEditorPreview .WikiaPhotoGalleryPreviewDDPlaceholder,
#pagehistory .selected,
.WikiaDropdown .dropdown li,
.modal.large>footer,
.modal.large>header,
.modal.medium>footer,
.modal.medium>header,
.modal.small>footer,
.modal.small>header,
.ns-120 .mw-content-text>ul li:hover li:hover li:hover,
.ns-120 .mw-content-text>ul li:hover li:hover li:hover li:hover li:hover,
.ns-120 .mw-content-text>ul li:hover li:hover li:hover li:hover li:hover li:hover li:hover,
.ns-120 .mw-content-text>ul ul li:hover li:hover li:hover,
.ns-120 .mw-content-text>ul ul li:hover li:hover li:hover li:hover li:hover,
.ns-120 .mw-content-text>ul ul li:hover li:hover li:hover li:hover li:hover li:hover li:hover,
.oo-ui-window-foot,
.oo-ui-window-head,
.questdetails .questdetails-header,
.search-tabs .selected,
.transcript>ul li:hover li:hover li:hover,
.transcript>ul li:hover li:hover li:hover li:hover li:hover,
.transcript>ul li:hover li:hover li:hover li:hover li:hover li:hover li:hover,
.transcript>ul ul li:hover li:hover li:hover,
.transcript>ul ul li:hover li:hover li:hover li:hover li:hover,
.transcript>ul ul li:hover li:hover li:hover li:hover li:hover li:hover li:hover,
.ve-ce-tableCellNode-header,
.ve-spinner .loading,
table.alternating-rows tr:nth-child(even),
table.property-page-results .value-row:hover {
  background-color: #2b2b2b!important
}
#WikiaPhotoGallerySearchResults::-webkit-scrollbar {
  width: 13px!important
}
#WikiaPhotoGallerySearchResults::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  border-radius: 10px!important;
  background-color: #262626!important;
  border: 1px solid #2b2b2b!important
}
#WikiaPhotoGallerySearchResults::-webkit-scrollbar-thumb {
  border-radius: 10px!important;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  background-color: #404040!important;
  border: 1px solid #191919!important
}
#WikiaPhotoGallerySearchResults::-webkit-scrollbar-corner {
  background-color: transparent!important
}
.modalWrapper {
  background-color: #1e1e1e!important;
  color: #c5c5c5!important;
  box-shadow: 0 0 15px 0 #000!important
}
#CreatePageModalDialog .accent,
#FounderProgressWidget .preview header h1,
#MyToolsConfigurationWrapper .autocomplete li>a,
#MyToolsConfigurationWrapper .popular-tools-group .popular-toggle,
#TemplateClassificationEditModal .tc-type-name,
#UserProfileMasthead .contributions-details a,
#ca-addsection+div.wds-dropdown .wds-dropdown__content li>a,
#ca-edit+div.wds-dropdown .wds-dropdown__content li>a,
#ca-ve-edit+div.wds-dropdown .wds-dropdown__content li>a,
#ca-viewsource+div.wds-dropdown .wds-dropdown__content li>a,
#chartPropertiespopup,
#mw-revision-info,
#mw-revision-info-current,
#mw-revision-nav,
.AdminDashboard .control-section header h1,
.AdminDashboardRail h1,
.EditPage .CategorySelect .categories .category,
.EditPageHeader,
.EditPageHeader h2,
.EditPageToolbar .cke_toolbar_expand a,
.QuickStatsWidget .WikiaDataTable td,
.QuickStatsWidget .WikiaDataTable th,
.Search .result-count,
.cke_button a .cke_label,
.community-page-rail .community-page-module-section-title,
.discussiontable.noresults tr:nth-child(1) th a,
.highcharts-title,
.modal.large>footer,
.modal.large>footer h3,
.modal.large>header,
.modal.large>header h3,
.modal.medium>footer,
.modal.medium>footer h3,
.modal.medium>header,
.modal.medium>header h3,
.modal.small>footer,
.modal.small>footer h3,
.modal.small>header,
.modal.small>header h3,
.navbox,
.navbox .navbox-footer a,
.navbox .navbox-title a,
.oo-ui-optionWidget .oo-ui-labelElement-label,
.oo-ui-popupToolGroup .oo-ui-toolGroup-tools .oo-ui-tool-title,
.oo-ui-popupToolGroup .oo-ui-toolGroup-tools li>a,
.page-header__counter,
.smw-column-header,
.wikia-menu-button ul li a {
  color: #c5c5c5!important
}
#MyToolsConfigurationWrapper .search-box input.search::-webkit-input-placeholder {
  color: #9f9f9f!important
}
#MyToolsConfigurationWrapper .search-box input.search:-ms-input-placeholder {
  color: #9f9f9f!important
}
#MyToolsConfigurationWrapper .search-box input.search::-ms-input-placeholder {
  color: #9f9f9f!important
}
#MyToolsConfigurationWrapper .search-box input.search::placeholder {
  color: #9f9f9f!important
}
#MyToolsConfigurationWrapper .popular-tools-group {
  background-image: linear-gradient(0deg,#232323,#2d2d2d 98%,#1e1e1e)!important;
  color: #c5c5c5!important;
  border-color: #52555a!important
}
#MyToolsConfigurationWrapper .popular-tools-group .popular-toggle .icon-hide,
.module h3 .chevron.collapse {
  border-bottom-color: #c5c5c5!important
}
#MyToolsConfigurationWrapper .popular-tools-group .popular-toggle .icon-show,
.WikiaDropdown .selected-items .arrow,
.module h3 .chevron.expand {
  border-top-color: #c5c5c5!important
}
#MyToolsConfigurationWrapper .autocomplete {
  background-color: #2b2b2b!important;
  border-color: #52555a!important;
  box-shadow: 3px 3px 6px 0 rgba(0,0,0,.3)!important
}
#MyToolsConfigurationWrapper .autocomplete .selected,
#MyToolsConfigurationWrapper .autocomplete li>a:hover,
#ca-addsection+.wds-dropdown #ca-addsection:hover,
#ca-addsection+.wds-dropdown #ca-edit:hover,
#ca-addsection+.wds-dropdown #ca-ve-edit:hover,
#ca-addsection+div.wds-dropdown .wds-dropdown__content li>a:hover,
#ca-addsection~.WikiaMenuElement #ca-addsection:hover,
#ca-addsection~.WikiaMenuElement #ca-edit:hover,
#ca-addsection~.WikiaMenuElement #ca-ve-edit:hover,
#ca-edit+.wds-dropdown #ca-addsection:hover,
#ca-edit+.wds-dropdown #ca-edit:hover,
#ca-edit+.wds-dropdown #ca-ve-edit:hover,
#ca-edit+div.wds-dropdown .wds-dropdown__content li>a:hover,
#ca-edit~.WikiaMenuElement #ca-addsection:hover,
#ca-edit~.WikiaMenuElement #ca-edit:hover,
#ca-edit~.WikiaMenuElement #ca-ve-edit:hover,
#ca-ve-edit+.wds-dropdown #ca-addsection:hover,
#ca-ve-edit+.wds-dropdown #ca-edit:hover,
#ca-ve-edit+.wds-dropdown #ca-ve-edit:hover,
#ca-ve-edit+div.wds-dropdown .wds-dropdown__content li>a:hover,
#ca-ve-edit~.WikiaMenuElement #ca-addsection:hover,
#ca-ve-edit~.WikiaMenuElement #ca-edit:hover,
#ca-ve-edit~.WikiaMenuElement #ca-ve-edit:hover,
#ca-viewsource+div.wds-dropdown .wds-dropdown__content li>a:hover,
.oo-ui-popupToolGroup .oo-ui-toolGroup-tools li>a:hover,
.oo-ui-popupToolGroup .oo-ui-toolGroup-tools>span:hover {
  color: #6bbaea!important;
  background-color: #383838!important
}
#MyToolsConfigurationWrapper .autocomplete ul::after,
#MyToolsConfigurationWrapper .autocomplete ul::before,
#ca-addsection+div.wds-dropdown .wds-dropdown__content ul::after,
#ca-addsection+div.wds-dropdown .wds-dropdown__content ul::before,
#ca-edit+div.wds-dropdown .wds-dropdown__content ul::after,
#ca-edit+div.wds-dropdown .wds-dropdown__content ul::before,
#ca-ve-edit+div.wds-dropdown .wds-dropdown__content ul::after,
#ca-ve-edit+div.wds-dropdown .wds-dropdown__content ul::before,
#ca-viewsource+div.wds-dropdown .wds-dropdown__content ul::after,
#ca-viewsource+div.wds-dropdown .wds-dropdown__content ul::before,
.oo-ui-popupToolGroup .oo-ui-toolGroup-tools ul::after,
.oo-ui-popupToolGroup .oo-ui-toolGroup-tools ul::before,
.oo-ui-toolbar-actions .oo-ui-toolbar-bar,
.ve-ui-wikiaSingleMediaCartWidget {
  background: 0 0!important
}
#MyToolsConfigurationWrapper .options-list li .tree-visual {
  background-color: #46484d!important
}
#MyToolsConfigurationWrapper .options-list li:hover {
  color: #c5c5c5!important;
  background-color: #2b2b2b!important
}
#MyToolsRenameItem .input-box::-webkit-input-placeholder {
  color: #9f9f9f!important
}
#MyToolsRenameItem .input-box:-ms-input-placeholder {
  color: #9f9f9f!important
}
#MyToolsRenameItem .input-box::-ms-input-placeholder {
  color: #9f9f9f!important
}
#MyToolsRenameItem .input-box::placeholder {
  color: #9f9f9f!important
}
#CreatePageDialog input::-webkit-input-placeholder {
  color: #9f9f9f!important
}
#CreatePageDialog input:-ms-input-placeholder {
  color: #9f9f9f!important
}
#CreatePageDialog input::-ms-input-placeholder {
  color: #9f9f9f!important
}
#CreatePageDialog input::placeholder {
  color: #9f9f9f!important
}
#CreatePageModalDialog .create-page-dialog__proposals {
  background: #191919!important
}
#GlobalShortcutsSearch #global_shortcuts_search_field {
  background-color: #cacaca!important;
  color: #3a3a3a!important;
  border: 1px solid #adaaa5!important;
  -webkit-filter: invert(100)!important;
  filter: invert(100)!important
}
#GlobalShortcutsSearch #global_shortcuts_search_field::-webkit-input-placeholder {
  color: #606060!important
}
#GlobalShortcutsSearch #global_shortcuts_search_field:-ms-input-placeholder {
  color: #606060!important
}
#GlobalShortcutsSearch #global_shortcuts_search_field::-ms-input-placeholder {
  color: #606060!important
}
#GlobalShortcutsSearch #global_shortcuts_search_field::placeholder {
  color: #606060!important
}
#GlobalShortcutsSearch .autocomplete-suggestions,
.ve-ui-mwTemplateDialog-filter {
  background-color: #232323!important;
  border-color: #52555a!important
}
#EditPageMain,
#GlobalShortcutsSearch .autocomplete-suggestions .autocomplete-selected,
#UserProfileMasthead .masthead-info,
.EditPage {
  background-color: #303030!important
}
.ui-dialog {
  box-shadow: 0 10px 60px 0 #000!important
}
.ui-widget-content {
  background: #1e1e1e!important;
  color: #c5c5c5!important;
  border-color: #52555a!important
}
.ui-widget-header {
  color: #c5c5c5!important;
  background: #2b2b2b!important;
  border: none!important
}
#CategorySelectAdd,
#global-navigation-anon-register,
.WikiaRail .content-review-module-test-mode-enable,
.button.secondary,
.oo-ui-buttonElement-button.secondary,
.ui-dialog .ui-dialog-buttonpane button.ui-button:first-of-type,
.wikia-button.secondary,
.wikia-menu-button.secondary,
.wikia-single-button a.secondary,
button.secondary,
input[type=button].secondary,
input[type=reset].secondary,
input[type=submit].secondary {
  color: #dfdfdf!important;
  background-image: none!important;
  border-color: #595959!important;
  background-color: #595959!important
}
.ui-dialog .ui-dialog-buttonpane button.ui-button:first-of-type.active,
.ui-dialog .ui-dialog-buttonpane button.ui-button:first-of-type:active,
.ui-dialog .ui-dialog-buttonpane button.ui-button:first-of-type:hover {
  color: #dfdfdf!important;
  background-image: none!important;
  border-color: #3f3f3f!important;
  background-color: #3f3f3f!important
}
.ui-state-hover .ui-icon-closethick {
  -webkit-filter: invert(100%) brightness(130%)!important;
  filter: invert(100%) brightness(130%)!important
}
.ui-dialog .ui-dialog-titlebar-close.ui-state-hover {
  background: #6a6a6a!important;
  border-color: #52555a!important
}
table.wikipedia {
  background: #151515!important;
  border: none!important
}
.forumheader,
.messagebox,
.official {
  background-color: #151515!important
}
.messagebox {
  border-left-color: #90c2dd!important
}
.messagebox.obsolete {
  border-color: #464646!important
}
.messagebox.disambig a,
.messagebox.info a,
.messagebox.obsolete a {
  color: #6c6c6c!important
}
.messagebox.disambig,
.messagebox.info {
  border-color: #898989!important
}
.messagebox.action {
  border-color: #45697d!important
}
.messagebox.action a {
  color: #3c5c6e!important
}
.messagebox.file {
  border-color: #617ebc!important
}
.messagebox.file a {
  color: #556d97!important
}
.messagebox.warn {
  border-color: #861c10!important
}
.messagebox.warn a {
  color: #861c10!important
}
.messagebox.safe {
  border-color: #1b8408!important
}
.messagebox.safe a {
  color: #1b8408!important
}
.messagebox.unsafe {
  border-color: #970!important
}
.messagebox.unsafe a {
  color: #970!important
}
.messagebox.easter {
  border-color: #598014!important
}
.messagebox.easter a {
  color: #598014!important
}
.messagebox.halloween {
  border-color: #794080!important
}
.messagebox.halloween a {
  color: #794080!important
}
.messagebox.thanksgiving {
  border-color: #a65800!important
}
.messagebox.thanksgiving a {
  color: #a65800!important
}
.messagebox.christmas {
  border-color: #428bb5!important
}
.messagebox.christmas a {
  color: #3a799d!important
}
.editpage-intro > .editpage-intro-wrapper > div {
  background-color: #151515!important;
  color: #c5c5c5!important
}
.editpage-intro .expand {
  background-color: #2f2f2f!important;
  border: 1px solid #52555a!important;
  color: #c5c5c5!important
}
table.archive {
  background-color: #323232!important;
  border: 1px solid #52555a!important
}
.questreq ul {
  border-left: 1px dotted #9f9f9f!important
}
#mp-poll-prev-results th,
.mp-color .mp-endrow .mp-endbox,
.mp-color2 .mp-endrow .mp-endbox2,
blockquote.block {
  background-color: #282828!important
}
#FounderProgressWidget .preview header,
#GEchartpopup,
#GEchartpopup .GEChartBox,
.AdminDashboardTabs .tab.active,
.blockquote-mark::before {
  background: #1e1e1e!important
}
.blockquote-mark::after {
  color: #282828!important
}
.navbox .navbox-group,
.navbox .navbox-list {
  border-color: #1e1e1e!important
}
.navbox .navbox-footer,
.navbox .navbox-title {
  border-color: #1e1e1e!important;
  color: #c5c5c5!important;
  background-color: #265588!important
}
#global-navigation-anon-sign-in,
#page-header-add-new-photo,
#rs-exchange-data,
.button,
.cke_button a,
.oo-ui-buttonElement-button,
.smw-ask-action-btn-lblue,
.tabberlive ul.tabbernav li.tabberactive a,
.wds-global-navigation__search-submit,
.wds-sign-out__button,
.wikia-button,
.wikia-menu-button,
.wikia-menu-button .codepage-publish-button,
.wikia-menu-button .drop,
.wikia-single-button a,
button,
input[type=button],
input[type=reset],
input[type=submit] {
  color: #dfdfdf!important;
  background-image: none!important;
  background-color: #2f69a8!important;
  border-color: #2f69a8!important
}
#alphabetical-header,
fieldset {
  background-color: #151515!important
}
code,
pre {
  border: 1px solid #424242!important
}
#ca-addsection+div.wds-dropdown .wds-button.active,
#ca-addsection+div.wds-dropdown .wds-button:active,
#ca-addsection+div.wds-dropdown .wds-button:hover,
#ca-addsection.active,
#ca-addsection:active,
#ca-addsection:hover,
#ca-edit+div.wds-dropdown .wds-button.active,
#ca-edit+div.wds-dropdown .wds-button:active,
#ca-edit+div.wds-dropdown .wds-button:hover,
#ca-edit.active,
#ca-edit:active,
#ca-edit:hover,
#ca-ve-edit+div.wds-dropdown .wds-button.active,
#ca-ve-edit+div.wds-dropdown .wds-button:active,
#ca-ve-edit+div.wds-dropdown .wds-button:hover,
#ca-ve-edit.active,
#ca-ve-edit:active,
#ca-ve-edit:hover,
#ca-viewsource+div.wds-dropdown .wds-button.active,
#ca-viewsource+div.wds-dropdown .wds-button:active,
#ca-viewsource+div.wds-dropdown .wds-button:hover,
#ca-viewsource.active,
#ca-viewsource:active,
#ca-viewsource:hover,
#page-header-add-new-photo.active,
#page-header-add-new-photo:active,
#page-header-add-new-photo:hover,
#rs-exchange-data.active,
#rs-exchange-data:active,
#rs-exchange-data:hover,
.button.active,
.button:active,
.button:hover,
.cke_button a.active,
.cke_button a:active,
.cke_button a:hover,
.oo-ui-buttonElement-button.active,
.oo-ui-buttonElement-button:active,
.oo-ui-buttonElement-button:hover,
.smw-ask-action-btn-lblue.active,
.smw-ask-action-btn-lblue:active,
.smw-ask-action-btn-lblue:hover,
.tabberlive ul.tabbernav li.tabberactive a.active,
.tabberlive ul.tabbernav li.tabberactive a:active,
.tabberlive ul.tabbernav li.tabberactive a:hover,
.wikia-button.active,
.wikia-button:active,
.wikia-button:hover,
.wikia-menu-button .codepage-publish-button.active,
.wikia-menu-button .codepage-publish-button:active,
.wikia-menu-button .codepage-publish-button:hover,
.wikia-menu-button .drop.active,
.wikia-menu-button .drop:active,
.wikia-menu-button .drop:hover,
.wikia-menu-button.active,
.wikia-menu-button:active,
.wikia-menu-button:hover,
.wikia-single-button a.active,
.wikia-single-button a:active,
.wikia-single-button a:hover,
button.active,
button:active,
button:hover,
input[type=button].active,
input[type=button]:active,
input[type=button]:hover,
input[type=reset].active,
input[type=reset]:active,
input[type=reset]:hover,
input[type=submit].active,
input[type=submit]:active,
input[type=submit]:hover {
  color: #dfdfdf!important;
  background-image: none!important;
  background-color: #4082ca!important;
  border-color: #4082ca!important
}
.infobox-bonuses td,
table.smwb-factbox tr.smwb-ipropvalue td,
table.smwb-factbox tr.smwb-propvalue td,
table.smwb-ifactbox tr.smwb-ipropvalue td,
table.smwb-ifactbox tr.smwb-propvalue td {
  border-color: #52555a!important;
  background-color: #323232!important
}
#modal #cioItem::-webkit-input-placeholder {
  color: #9f9f9f!important
}
#modal #cioItem:-ms-input-placeholder {
  color: #9f9f9f!important
}
#modal #cioItem::-ms-input-placeholder {
  color: #9f9f9f!important
}
#modal #cioItem::placeholder {
  color: #9f9f9f!important
}
#modal .cioPos,
.mw-plusminus-pos {
  color: #06df2e!important
}
#modal .cioNeg,
.coins-neg,
.mw-plusminus-neg {
  color: #d72b16!important
}
.infobox-monster .offensive-header {
  background-color: #58120b!important
}
.infobox-monster .offensive-subheader {
  color: #861c10!important;
  background-color: #e6bbb3!important
}
.infobox-monster .defensive-header {
  background-color: #356e90!important
}
.infobox-monster .defensive-subheader {
  color: #32637c!important;
  background-color: #86bedc!important
}
.infobox-monster .slayer-header {
  background-color: #464646!important
}
.WikiaDropdown .selected-items,
code,
pre {
  background-color: #353535!important
}
.WikiaArticle .references>li:target,
.WikiaDropdown .dropdown li:hover {
  background-color: #383838!important
}
#alphabetical-header {
  border-color: #222!important
}
pre {
  color: #c5c5c5!important
}
fieldset {
  border-color: #52555a!important
}
.WikiaPage input:not([type=submit]):not([type=button]):not([type=reset]):not([type=checkbox])::-webkit-input-placeholder,
.modalWrapper input:not([type=submit]):not([type=button]):not([type=reset]):not([type=checkbox])::-webkit-input-placeholder,
.ui-dialog input:not([type=submit]):not([type=button]):not([type=reset]):not([type=checkbox])::-webkit-input-placeholder {
  color: #9f9f9f!important
}
.WikiaPage input:not([type=submit]):not([type=button]):not([type=reset]):not([type=checkbox]):-ms-input-placeholder,
.modalWrapper input:not([type=submit]):not([type=button]):not([type=reset]):not([type=checkbox]):-ms-input-placeholder,
.ui-dialog input:not([type=submit]):not([type=button]):not([type=reset]):not([type=checkbox]):-ms-input-placeholder {
  color: #9f9f9f!important
}
.WikiaPage input:not([type=submit]):not([type=button]):not([type=reset]):not([type=checkbox])::-ms-input-placeholder,
.modalWrapper input:not([type=submit]):not([type=button]):not([type=reset]):not([type=checkbox])::-ms-input-placeholder,
.ui-dialog input:not([type=submit]):not([type=button]):not([type=reset]):not([type=checkbox])::-ms-input-placeholder {
  color: #9f9f9f!important
}
.WikiaPage input:not([type=submit]):not([type=button]):not([type=reset]):not([type=checkbox])::placeholder,
.modalWrapper input:not([type=submit]):not([type=button]):not([type=reset]):not([type=checkbox])::placeholder,
.ui-dialog input:not([type=submit]):not([type=button]):not([type=reset]):not([type=checkbox])::placeholder {
  color: #9f9f9f!important
}
textarea::-webkit-input-placeholder {
  color: #9f9f9f!important
}
textarea:-ms-input-placeholder {
  color: #9f9f9f!important
}
textarea::-ms-input-placeholder {
  color: #9f9f9f!important
}
textarea::placeholder {
  color: #9f9f9f!important
}
textarea::-webkit-scrollbar {
  width: 13px!important
}
textarea::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  border-radius: 10px!important;
  background-color: #262626!important;
  border: 1px solid #2b2b2b!important
}
textarea::-webkit-scrollbar-thumb {
  border-radius: 10px!important;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  background-color: #404040!important;
  border: 1px solid #191919!important
}
textarea::-webkit-scrollbar-corner {
  background-color: transparent!important
}
.WikiaPage select::-webkit-input-placeholder,
.modalWrapper select::-webkit-input-placeholder,
.ui-dialog select::-webkit-input-placeholder {
  color: #9f9f9f!important
}
.WikiaPage select:-ms-input-placeholder,
.modalWrapper select:-ms-input-placeholder,
.ui-dialog select:-ms-input-placeholder {
  color: #9f9f9f!important
}
.WikiaPage select::-ms-input-placeholder,
.modalWrapper select::-ms-input-placeholder,
.ui-dialog select::-ms-input-placeholder {
  color: #9f9f9f!important
}
.WikiaPage select::placeholder,
.modalWrapper select::placeholder,
.ui-dialog select::placeholder {
  color: #9f9f9f!important
}
.WikiaDropdown .selected-items {
  border-color: #52555a!important
}
#MathJax_Zoom,
.WikiaDropdown .dropdown,
.ui-autocomplete {
  background-color: #2b2b2b!important;
  border-color: #52555a!important
}
.WikiaDropdown .selected-items:hover {
  background-color: #424242!important
}
.WikiaDropdown .dropdown,
.ui-autocomplete {
  box-shadow: 3px 3px 6px 0 rgba(0,0,0,.5)!important
}
.WikiaDropdown .dropdown::-webkit-scrollbar {
  width: 13px!important
}
.WikiaDropdown .dropdown::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  border-radius: 10px!important;
  background-color: #262626!important;
  border: 1px solid #2b2b2b!important
}
.WikiaDropdown .dropdown::-webkit-scrollbar-thumb {
  border-radius: 10px!important;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  background-color: #404040!important;
  border: 1px solid #191919!important
}
.WikiaDropdown .dropdown::-webkit-scrollbar-corner {
  background-color: transparent!important
}
.WikiaDropdown .dropdown .toolbar {
  background-color: #232323!important;
  border-bottom-color: #52555a!important
}
#CategorySelectAdd.active,
#CategorySelectAdd:active,
#CategorySelectAdd:hover,
#global-navigation-anon-register.active,
#global-navigation-anon-register:active,
#global-navigation-anon-register:hover,
.WikiaRail .content-review-module-test-mode-enable.active,
.WikiaRail .content-review-module-test-mode-enable:active,
.WikiaRail .content-review-module-test-mode-enable:hover,
.button.secondary.active,
.button.secondary:active,
.button.secondary:hover,
.oo-ui-buttonElement-button.secondary.active,
.oo-ui-buttonElement-button.secondary:active,
.oo-ui-buttonElement-button.secondary:hover,
.wikia-button.secondary.active,
.wikia-button.secondary:active,
.wikia-button.secondary:hover,
.wikia-menu-button.secondary.active,
.wikia-menu-button.secondary:active,
.wikia-menu-button.secondary:hover,
.wikia-single-button a.secondary.active,
.wikia-single-button a.secondary:active,
.wikia-single-button a.secondary:hover,
button.secondary.active,
button.secondary:active,
button.secondary:hover,
input[type=button].secondary.active,
input[type=button].secondary:active,
input[type=button].secondary:hover,
input[type=reset].secondary.active,
input[type=reset].secondary:active,
input[type=reset].secondary:hover,
input[type=submit].secondary.active,
input[type=submit].secondary:active,
input[type=submit].secondary:hover {
  color: #dfdfdf!important;
  background-image: none!important;
  border-color: #3f3f3f!important;
  background-color: #3f3f3f!important
}
#gemw_guide,
.maybecell,
.nocell,
.sg-green,
.sg-red,
.sg-yellow,
.yescell {
  color: #c5c5c5!important
}
img.tex {
  -webkit-filter: invert(.85)!important;
  filter: invert(.85)!important
}
#MathJax_Zoom {
  box-shadow: 5px 5px 15px rgba(0,0,0,.5)!important
}
#MathJax_Zoom::-webkit-scrollbar {
  width: 13px!important
}
#MathJax_Zoom::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  border-radius: 10px!important;
  background-color: #262626!important;
  border: 1px solid #2b2b2b!important
}
#MathJax_Zoom::-webkit-scrollbar-thumb {
  border-radius: 10px!important;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  background-color: #404040!important;
  border: 1px solid #191919!important
}
#MathJax_Zoom::-webkit-scrollbar-corner {
  background-color: transparent!important
}
.highcharts-background,
.highcharts-legend-box,
.highcharts-plot-background {
  fill: #2b2b2b!important
}
.highcharts-axis-line,
.highcharts-grid-line,
.highcharts-label-box,
.highcharts-navigator-outline {
  stroke: #52555a!important
}
#wds-company-logo-fandom-white>g>path:last-child,
.highcharts-axis-labels>text,
.highcharts-axis-title,
.highcharts-legend-item text,
.highcharts-range-input text,
.preview_box svg {
  fill: #c5c5c5!important
}
.infobox-switch .hidden td[data-attr-param=graph],
.oo-ui-menuSectionOptionWidget {
  background: #2b2b2b!important;
  color: #c5c5c5!important
}
#GEchartpopup .highcharts-background,
#GEchartpopup .highcharts-legend-box,
#GEchartpopup .highcharts-plot-background {
  fill: #1e1e1e!important
}
#averagepopup::-webkit-input-placeholder,
#extraItempopup::-webkit-input-placeholder,
.highcharts-range-selector::-webkit-input-placeholder {
  color: #9f9f9f!important
}
#averagepopup:-ms-input-placeholder,
#extraItempopup:-ms-input-placeholder,
.highcharts-range-selector:-ms-input-placeholder {
  color: #9f9f9f!important
}
#averagepopup::-ms-input-placeholder,
#extraItempopup::-ms-input-placeholder,
.highcharts-range-selector::-ms-input-placeholder {
  color: #9f9f9f!important
}
#averagepopup::placeholder,
#extraItempopup::placeholder,
.highcharts-range-selector::placeholder {
  color: #9f9f9f!important
}
.community-page-card-module .community-page-card-module-header-icon,
.zoomButton .highcharts-button-box {
  fill: #2f69a8!important
}
.zoomButton:hover .highcharts-button-box {
  fill: #4082ca!important
}
.highcharts-scrollbar-arrow,
.wds-community-header .wds-button.wds-is-secondary svg,
.zoomButton text {
  fill: #dfdfdf!important
}
.wds-global-navigation__account-menu path,
.wds-global-navigation__notifications-dropdown .wds-icon-small path {
  fill: #acacac!important
}
.highcharts-scrollbar-track {
  fill: #444!important;
  stroke: #444!important
}
.highcharts-scrollbar-button {
  fill: #5e5e5e!important;
  stroke: #5e5e5e!important
}
.highcharts-scrollbar-thumb {
  fill: #777!important;
  stroke: #777!important
}
.highcharts-scrollbar-rifles {
  stroke: #dfdfdf!important;
  stroke-width: 2px!important
}
#GEchartpopup .highcharts-scrollbar-track {
  fill: #383838!important;
  stroke: #383838!important
}
#GEchartpopup .highcharts-scrollbar-button {
  fill: #515151!important;
  stroke: #515151!important
}
#GEchartpopup .highcharts-scrollbar-thumb {
  fill: #6a6a6a!important;
  stroke: #6a6a6a!important
}
#gemw_guide {
  border: none!important;
  background: #151515!important
}
.nocell,
.sg-red {
  background: #58120b!important
}
.maybecell,
.sg-yellow {
  background: #625e0f!important
}
.sg-green,
.yescell {
  background: #1e5400!important
}
.coins-pos {
  color: #5e9ec4!important
}
.ace_gutter,
.mp-color,
.mp-color2,
.portal-link a {
  background-color: #323232!important;
  color: #c5c5c5!important
}
.portal-link a:hover {
  background-color: #656565!important;
  color: #dfdfdf!important
}
.status-active {
  background-color: #006d13!important;
  color: #c5c5c5!important
}
.status-inactive {
  background-color: #58120b!important;
  color: #c5c5c5!important
}
#mp-footer,
.CategorySelect.articlePage,
.WikiaArticleInterlang,
.article-categories {
  background: #151515!important
}
.timeline-Viewport::-webkit-scrollbar {
  width: 13px!important
}
.timeline-Viewport::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  border-radius: 10px!important;
  background-color: #262626!important;
  border: 1px solid #2b2b2b!important
}
.timeline-Viewport::-webkit-scrollbar-thumb {
  border-radius: 10px!important;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  background-color: #404040!important;
  border: 1px solid #191919!important
}
.timeline-Viewport::-webkit-scrollbar-corner {
  background-color: transparent!important
}
.AdminDashboard .control-section .controls,
.WikiaUserPagesHeader,
.oo-ui-bookletLayout-outlinePanel .oo-ui-outlineControlsWidget {
  background: #232323!important
}
#UserProfileMasthead .masthead-info hgroup {
  background-color: #265588!important;
  color: #c5c5c5!important;
  background-image: linear-gradient(0deg,#265588,#2c619c)!important
}
#UserProfileMasthead .masthead-info .tag {
  background: #4887cc!important
}
#UserProfileMasthead .masthead-info-lower:before {
  border-color: #303030 #303030 transparent transparent!important
}
.tabs {
  border-bottom: 1px solid #52555a!important
}
.tabs .selected a {
  background: #1e1e1e!important;
  color: #c5c5c5!important;
  border: 1px solid #52555a!important;
  border-bottom: 1px solid transparent!important
}
.discussiontable tr:nth-child(2) th,
.forumcolumnheader {
  background-color: #141414!important;
  color: #c5c5c5!important
}
.discussiontable tr:nth-child(1) th,
.forumactiveheader,
.forumarchiveheader,
.forumoldarchives {
  color: #dfdfdf!important;
  background-color: #265588!important
}
.discussiontable.noresults tr:nth-child(1) th {
  color: #c5c5c5!important;
  background-color: #0a0a0a!important
}
.forumlist.archive {
  background-color: transparent!important;
  border: none!important
}
#ca-addsection img,
#ca-edit img,
#ca-ve-edit img,
#ca-viewsource img,
#page-header-add-new-photo img,
.Search .SearchInput .sprite {
  -webkit-filter: brightness(85%)!important;
  filter: brightness(85%)!important
}
.oo-ui-optionWidget-highlighted,
.search-tabs li a:hover,
.ve-ui-mwMediaResultWidget .oo-ui-labelElement-label {
  background-color: #323232!important
}
.mw-tag-markers,
.mw-tag-markers a {
  color: red!important
}
.mw-tag-marker-visualeditor a,
.mw-tag-marker-visualeditor-needcheck a {
  color: #e49f10!important
}
.recentchangestext .speedy-delete,
.recentchangestext .speedy-move {
  color: #cb1c00!important
}
.community-page-card-module,
.community-page-rail {
  background: #2d2d2d!important
}
.community-page-card-module .community-page-card-module-header {
  background-color: #2f69a8!important;
  color: #c5c5c5!important
}
.admininfo,
.introheader,
.userhelpinfo {
  color: #c5c5c5!important;
  background-color: #151515!important
}
.browse-input-resp .mw-ui-input:focus {
  box-shadow: inset 0 0 0 1px rgba(0,0,0,.2)!important
}
table.smwb-factbox,
table.smwb-ifactbox {
  border-collapse: collapse!important
}
#other_options tr:nth-child(even) {
  background: #222!important
}
#other_options tr:nth-child(odd) {
  background: #2f2f2f!important
}
.AdminDashboardHeader {
  background: #2b2b2b!important;
  border-color: #52555a!important;
  box-shadow: inset 0 -4px 2px 0 #383838!important
}
.AdminDashboard .control-section header,
.AdminDashboardGeneralHeader {
  background-color: #2b2b2b!important;
  background-image: linear-gradient(0deg,#2b2b2b,#383838)!important;
  color: #c5c5c5!important
}
.AdminDashboardTabs .tab {
  color: #c5c5c5!important;
  background: #2b2b2b!important;
  border: 1px solid #52555a!important;
  border-bottom: 0!important
}
.AdminDashboard .control-section header {
  border-color: #52555a!important
}
.AdminDashboard .control-section .controls .control .representation {
  background-image: none!important;
  background-color: #2f69a8!important;
  border-color: #2f69a8!important
}
.AdminDashboard .control-section .controls .control:hover .representation {
  background-image: none!important;
  background-color: #4082ca!important;
  border-color: #4082ca!important
}
.AdminDashboardGeneralHeader {
  border-color: #52555a!important;
  box-shadow: 0 2px 2px 0 #111!important
}
.EditPageHeader,
.EditPageRail,
.EditPageToolbar,
.module_content {
  background-color: #303030!important
}
.EditPageToolbar,
.module_content,
.oo-ui-toolbar-bar {
  background-image: linear-gradient(0deg,#1e1e1e 0,#303030 50%)!important
}
.AdminDashboard .AdminDashboardGeneralHeader h2,
.wikia-menu-button {
  border: none!important
}
#FounderProgressWidget .preview {
  background: #2b2b2b!important;
  border-color: #52555a!important
}
#FounderProgressWidget .preview .founder-progress-bar {
  -webkit-filter: invert(.8)!important;
  filter: invert(.8)!important
}
#FounderProgressWidget .preview header:after {
  border-right-color: #1e1e1e!important
}
#FounderProgressWidget .preview .activities .activity .label,
#FounderProgressWidget .preview .activities .activity.active .label {
  background-color: #323232!important;
  background-image: linear-gradient(0deg,#323232,#3a3a3a)!important;
  color: #c5c5c5!important;
  border-color: #52555a!important
}
#FounderProgressWidget .preview .activities .activity .description:before,
#FounderProgressWidget .preview .activities .activity.active .description:before {
  border-top-color: #323232!important
}
#FounderProgressWidget .preview .activities .activity .label .chevron {
  border-top-color: #c5c5c5!important;
  border-bottom-color: transparent!important
}
#FounderProgressWidget .preview .activities .activity.active .label .chevron {
  border-top-color: transparent!important;
  border-bottom-color: #c5c5c5!important
}
.QuickStatsWidget .WikiaDataTable {
  background: #323232!important;
  border-color: #52555a!important
}
.QuickStatsWidget .WikiaDataTable .highlight-top,
.QuickStatsWidget .WikiaDataTable .totals td:nth-child(2),
.QuickStatsWidget .WikiaDataTable td:nth-child(2) {
  background-color: #1e1e1e!important;
  background-image: linear-gradient(90deg,#232323,#1e1e1e)!important;
  color: #b8b8b8!important
}
.QuickStatsWidget .WikiaDataTable .totals td {
  background: #323232!important;
  color: #c5c5c5!important;
  border-top: 1px solid #52555a!important;
  border-bottom: 1px solid #52555a!important
}
.QuickStatsWidget .WikiaDataTable .totals td:first-child .pointer {
  background: #494949!important;
  color: #d2d2d2!important
}
.QuickStatsWidget .WikiaDataTable .totals td:first-child .pointer:before {
  border-left-color: #494949!important
}
.EditPageHeader,
.EditPageToolbar,
.oo-ui-toolbar-bar {
  border-color: #52555a!important
}
.QuickStatsWidget .WikiaDataTable .highlight-bottom {
  background-image: linear-gradient(0deg,#323232,#1e1e1e 25%,transparent)!important
}
.insights-container-nav .insights-nav-item.active,
.insights-container-nav .insights-nav-item:hover {
  background-color: #111!important
}
td.diff-context {
  background: #303030!important;
  border-color: #303030!important;
  color: #c5c5c5!important
}
.EditPageHeader {
  box-shadow: none!important
}
.EditPageToolbar {
  box-shadow: 0 4px 2px 0 rgba(0,0,0,.3)!important
}
.preview_box h3.preview-header {
  color: #c5c5c5!important;
  background: 0 0!important
}
.module_license p,
.preview_box .preview_icon p {
  color: #acacac!important
}
#PageHeader .page-header__categories-dropdown .page-header__categories-dropdown-content li>a,
#PageHeader .page-header__languages .wds-dropdown__content li>a,
.editpage-sourcewidemode-on .module_content,
.module h3,
.module_content,
.oo-ui-toolbar-bar,
.wds-dropdown__content .wds-dropdown-level-2__content li>a,
.wds-dropdown__content li>a {
  color: #c5c5c5!important
}
.EditPageRail {
  box-shadow: -2px 2px 2px #1e1e1e,-1px 0 0 #1e1e1e!important
}
.editpage-sourcewidemode-on .EditPageRail {
  background-color: transparent!important;
  box-shadow: none!important
}
.editpage-widemode-trigger {
  border-left-color: #52555a!important
}
#wpTextbox0,
#wpTextbox1,
.loading-background,
.loading-message,
.loading-throbber {
  background-color: #a9a9a9!important
}
.editpage-sourcewidemode-on .module_content {
  background-color: transparent!important;
  background-image: none!important
}
.module h3 {
  background-color: #1e1e1e!important;
  background-image: linear-gradient(0deg,#1e1e1e 0,#303030 100%)!important
}
.EditPage .CategorySelect .categories::-webkit-input-placeholder {
  color: #9f9f9f!important
}
.EditPage .CategorySelect .categories:-ms-input-placeholder {
  color: #9f9f9f!important
}
.EditPage .CategorySelect .categories::-ms-input-placeholder {
  color: #9f9f9f!important
}
.EditPage .CategorySelect .categories::placeholder {
  color: #9f9f9f!important
}
.EditPage .CategorySelect .categories .category.ui-sortable-helper,
.EditPage .CategorySelect .categories .category:hover {
  background-color: #4e4e4e!important
}
#wpTextbox0::-webkit-scrollbar {
  width: 13px!important
}
#wpTextbox0::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  border-radius: 10px!important;
  background-color: grey!important;
  border: 1px solid #7a7a7a!important
}
#wpTextbox0::-webkit-scrollbar-thumb {
  border-radius: 10px!important;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  background-color: #333!important
}
#wpTextbox0::-webkit-scrollbar-corner {
  background-color: transparent!important
}
#wpTextbox1 {
  color: #000!important
}
#wpTextbox1::-webkit-scrollbar {
  width: 13px!important
}
#wpTextbox1::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  border-radius: 10px!important;
  background-color: grey!important;
  border: 1px solid #7a7a7a!important
}
#wpTextbox1::-webkit-scrollbar-thumb {
  border-radius: 10px!important;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  background-color: #333!important
}
#wpTextbox1::-webkit-scrollbar-corner {
  background-color: transparent!important
}
#EditPageDialog.preview .modalContent .ArticlePreview::-webkit-scrollbar {
  width: 13px!important
}
#EditPageDialog.preview .modalContent .ArticlePreview::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  border-radius: 10px!important;
  background-color: #262626!important;
  border: 1px solid #2b2b2b!important
}
#EditPageDialog.preview .modalContent .ArticlePreview::-webkit-scrollbar-thumb {
  border-radius: 10px!important;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  background-color: #404040!important;
  border: 1px solid #191919!important
}
#EditPageDialog.preview .modalContent .ArticlePreview::-webkit-scrollbar-corner {
  background-color: transparent!important
}
.WikiaForm .input-group [type=email]::-webkit-input-placeholder,
.WikiaForm .input-group [type=password]::-webkit-input-placeholder,
.WikiaForm .input-group [type=text]::-webkit-input-placeholder,
.WikiaForm .input-group [type=url]::-webkit-input-placeholder,
.WikiaForm .input-group textarea::-webkit-input-placeholder {
  color: #9f9f9f!important
}
.WikiaForm .input-group [type=email]:-ms-input-placeholder,
.WikiaForm .input-group [type=password]:-ms-input-placeholder,
.WikiaForm .input-group [type=text]:-ms-input-placeholder,
.WikiaForm .input-group [type=url]:-ms-input-placeholder,
.WikiaForm .input-group textarea:-ms-input-placeholder {
  color: #9f9f9f!important
}
.WikiaForm .input-group [type=email]::-ms-input-placeholder,
.WikiaForm .input-group [type=password]::-ms-input-placeholder,
.WikiaForm .input-group [type=text]::-ms-input-placeholder,
.WikiaForm .input-group [type=url]::-ms-input-placeholder,
.WikiaForm .input-group textarea::-ms-input-placeholder {
  color: #9f9f9f!important
}
.WikiaForm .input-group [type=email]::placeholder,
.WikiaForm .input-group [type=password]::placeholder,
.WikiaForm .input-group [type=text]::placeholder,
.WikiaForm .input-group [type=url]::placeholder,
.WikiaForm .input-group textarea::placeholder {
  color: #9f9f9f!important
}
.oo-ui-toolbar-bar {
  background-color: #303030!important
}
.oo-ui-tool.oo-ui-widget-enabled:hover,
.ve-ui-wikiaUploadButtonWidget {
  border-color: #5e6267!important
}
.oo-ui-popupToolGroup-active.oo-ui-widget-enabled,
.oo-ui-tool-active.oo-ui-widget-enabled {
  background-color: #3d3d3d!important;
  border-color: #52555a!important;
  background-image: linear-gradient(0deg,#3a3a3a,#545454)!important
}
.oo-ui-iconElement-icon,
.oo-ui-indicator-down {
  -webkit-filter: invert(100%)!important;
  filter: invert(100%)!important
}
.oo-ui-menuToolGroup {
  border-color: #46484d!important
}
.oo-ui-indicator-alert {
  -webkit-filter: invert(1)!important;
  filter: invert(1)!important
}
.ns-120 .mw-content-text>ul li:hover,
.ns-120 .mw-content-text>ul ul li:hover,
.quest-action:hover,
.transcript>ul li:hover,
.transcript>ul ul li:hover,
.ve-ce-branchNode-blockSlugWrapper-former-unfocused,
.ve-ce-branchNode-blockSlugWrapper-unfocused:hover {
  background-color: #2b2b2b!important;
  outline-color: #52555a!important
}
.oo-ui-popupWidget-popup {
  background-color: #262626!important;
  border-color: #52555a!important
}
#PageHeader .page-header__categories-dropdown::after,
#PageHeader .page-header__languages::after,
#ca-addsection+div.wds-dropdown::after,
#ca-edit+div.wds-dropdown::after,
#ca-ve-edit+div.wds-dropdown::after,
#ca-viewsource+div.wds-dropdown::after,
.oo-ui-popupWidget-anchored .oo-ui-popupWidget-anchor::after,
.wds-dropdown::after {
  border-bottom-color: #2b2b2b!important
}
.oo-ui-pendingElement-pending input,
.oo-ui-pendingElement-pending textarea {
  -webkit-filter: invert(70%)!important;
  filter: invert(70%)!important
}
.oo-ui-menuSelectWidget {
  background: #2b2b2b!important;
  border-color: #52555a!important;
  box-shadow: 3px 3px 6px 0 rgba(0,0,0,.3)!important
}
.oo-ui-windowManager-modal > .oo-ui-dialog {
  background-color: rgba(30,30,30,.5)!important
}
.oo-ui-window-frame {
  background-color: #1e1e1e!important;
  border-color: #52555a!important
}
.oo-ui-optionWidget-pressed,
.oo-ui-optionWidget-selected {
  background: #161616!important;
  text-shadow: none!important
}
.oo-ui-inputWidget input::-webkit-input-placeholder {
  color: #9f9f9f!important
}
.oo-ui-inputWidget input:-ms-input-placeholder {
  color: #9f9f9f!important
}
.oo-ui-inputWidget input::-ms-input-placeholder {
  color: #9f9f9f!important
}
.oo-ui-inputWidget input::placeholder {
  color: #9f9f9f!important
}
.ve-ui-mwMediaResultWidget-thumbnail {
  border-color: #323232!important
}
.oo-ui-outlineSelectWidget::-webkit-scrollbar,
.oo-ui-panelLayout-scrollable::-webkit-scrollbar,
.ve-ui-wikiaCartWidget-wrapper::-webkit-scrollbar,
.ve-ui-wikiaMediaResultsWidget::-webkit-scrollbar {
  width: 13px!important
}
.oo-ui-outlineSelectWidget::-webkit-scrollbar-track,
.oo-ui-panelLayout-scrollable::-webkit-scrollbar-track,
.ve-ui-wikiaCartWidget-wrapper::-webkit-scrollbar-track,
.ve-ui-wikiaMediaResultsWidget::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  border-radius: 10px!important;
  background-color: #262626!important;
  border: 1px solid #2b2b2b!important
}
.oo-ui-outlineSelectWidget::-webkit-scrollbar-thumb,
.oo-ui-panelLayout-scrollable::-webkit-scrollbar-thumb,
.ve-ui-wikiaCartWidget-wrapper::-webkit-scrollbar-thumb,
.ve-ui-wikiaMediaResultsWidget::-webkit-scrollbar-thumb {
  border-radius: 10px!important;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  background-color: #404040!important;
  border: 1px solid #191919!important
}
.oo-ui-outlineSelectWidget::-webkit-scrollbar-corner,
.oo-ui-panelLayout-scrollable::-webkit-scrollbar-corner,
.ve-ui-wikiaCartWidget-wrapper::-webkit-scrollbar-corner,
.ve-ui-wikiaMediaResultsWidget::-webkit-scrollbar-corner {
  background-color: transparent!important
}
#ca-addsection,
#ca-edit,
#ca-ve-edit,
#ca-viewsource {
  color: #dfdfdf!important;
  background-image: none!important;
  background-color: #2f69a8!important;
  border-color: #2f69a8 #dfdfdf #2f69a8 #2f69a8!important
}
#ca-addsection:hover,
#ca-edit:hover,
#ca-ve-edit:hover,
#ca-viewsource:hover,
.paginator-prev::after {
  border-right-color: #dfdfdf!important
}
#ca-addsection + div.wds-dropdown .wds-button,
#ca-edit + div.wds-dropdown .wds-button,
#ca-ve-edit + div.wds-dropdown .wds-button,
#ca-viewsource + div.wds-dropdown .wds-button {
  color: #dfdfdf!important;
  background-image: none!important;
  background-color: #2f69a8!important;
  border-color: #2f69a8 #2f69a8 #2f69a8 #dfdfdf!important
}
#ca-addsection+div.wds-dropdown .wds-button:hover,
#ca-edit+div.wds-dropdown .wds-button:hover,
#ca-ve-edit+div.wds-dropdown .wds-button:hover,
#ca-viewsource+div.wds-dropdown .wds-button:hover,
.paginator-next::after {
  border-left-color: #dfdfdf!important
}
#ca-addsection + .wds-dropdown #ca-addsection,
#ca-addsection + .wds-dropdown #ca-edit,
#ca-addsection + .wds-dropdown #ca-ve-edit,
#ca-addsection ~ .WikiaMenuElement #ca-addsection,
#ca-addsection ~ .WikiaMenuElement #ca-edit,
#ca-addsection ~ .WikiaMenuElement #ca-ve-edit,
#ca-edit + .wds-dropdown #ca-addsection,
#ca-edit + .wds-dropdown #ca-edit,
#ca-edit + .wds-dropdown #ca-ve-edit,
#ca-edit ~ .WikiaMenuElement #ca-addsection,
#ca-edit ~ .WikiaMenuElement #ca-edit,
#ca-edit ~ .WikiaMenuElement #ca-ve-edit,
#ca-ve-edit + .wds-dropdown #ca-addsection,
#ca-ve-edit + .wds-dropdown #ca-edit,
#ca-ve-edit + .wds-dropdown #ca-ve-edit,
#ca-ve-edit ~ .WikiaMenuElement #ca-addsection,
#ca-ve-edit ~ .WikiaMenuElement #ca-edit,
#ca-ve-edit ~ .WikiaMenuElement #ca-ve-edit {
  color: #c5c5c5!important;
  background: 0 0!important;
  border: none!important
}
.wds-button.wds-is-secondary {
  color: #b8b8b8!important;
  border-color: #52555a!important
}
.wds-button.wds-is-secondary:hover {
  color: #dfdfdf!important;
  border-color: #767b82!important
}
.wikia-menu-button img.chevron {
  border-top-color: #dfdfdf!important
}
.wikia-menu-button ul li {
  border-top: 1px solid #52555a!important
}
.wikia-menu-button ul li a:hover {
  background-color: #383838!important;
  color: #6bbaea!important
}
.wikia-menu-button ul li:first-child {
  border-top: none!important
}
.wikia-menu-button ul li:hover {
  background-color: transparent!important
}
#PageHeader .page-header__languages .wds-dropdown__content li > a:hover {
  color: #6bbaea!important;
  background-color: #383838!important
}
#PageHeader .page-header__languages .wds-dropdown__content ul::after,
#PageHeader .page-header__languages .wds-dropdown__content ul::before {
  background: 0 0!important
}
#PageHeader .page-header__languages .wds-dropdown__content ul::-webkit-scrollbar {
  width: 13px!important
}
#PageHeader .page-header__languages .wds-dropdown__content ul::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  border-radius: 10px!important;
  background-color: #262626!important;
  border: 1px solid #2b2b2b!important
}
#PageHeader .page-header__languages .wds-dropdown__content ul::-webkit-scrollbar-thumb {
  border-radius: 10px!important;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  background-color: #404040!important;
  border: 1px solid #191919!important
}
#PageHeader .page-header__languages .wds-dropdown__content ul::-webkit-scrollbar-corner {
  background-color: transparent!important
}
#GlobalNavigationWallNotifications li>a:hover,
#PageHeader .page-header__categories-dropdown .page-header__categories-dropdown-content li>a:hover,
.WikiaBarWrapper .tools-menu li>a:hover,
.ui-autocomplete .ui-state-hover,
.ui-autocomplete li>a:hover,
.wds-dropdown .wds-is-selected>a,
.wds-dropdown__content .wds-dropdown-level-2__content li>a:hover,
.wds-dropdown__content li:hover>a,
.wds-dropdown__content li>a:hover {
  color: #6bbaea!important;
  background-color: #383838!important
}
#GlobalNavigationWallNotifications ul::after,
#GlobalNavigationWallNotifications ul::before,
#PageHeader .page-header__categories-dropdown .page-header__categories-dropdown-content ul::after,
#PageHeader .page-header__categories-dropdown .page-header__categories-dropdown-content ul::before,
.WikiaBarWrapper .tools-menu ul::after,
.WikiaBarWrapper .tools-menu ul::before,
.mw-scribunto-error,
.ui-autocomplete ul::after,
.ui-autocomplete ul::before,
.wds-dropdown__content .wds-dropdown-level-2__content ul::after,
.wds-dropdown__content .wds-dropdown-level-2__content ul::before,
.wds-dropdown__content ul::after,
.wds-dropdown__content ul::before,
body.background-dynamic.skin-oasis .background-image-gradient,
body.background-dynamic.skin-oasis .background-image-gradient::after,
body.background-dynamic.skin-oasis .background-image-gradient::before {
  background: 0 0!important
}
#PageHeader .page-header__categories-dropdown .page-header__categories-dropdown-content ul::-webkit-scrollbar {
  width: 13px!important
}
#PageHeader .page-header__categories-dropdown .page-header__categories-dropdown-content ul::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  border-radius: 10px!important;
  background-color: #262626!important;
  border: 1px solid #2b2b2b!important
}
#PageHeader .page-header__categories-dropdown .page-header__categories-dropdown-content ul::-webkit-scrollbar-thumb {
  border-radius: 10px!important;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  background-color: #404040!important;
  border: 1px solid #191919!important
}
#PageHeader .page-header__categories-dropdown .page-header__categories-dropdown-content ul::-webkit-scrollbar-corner {
  background-color: transparent!important
}
.wds-community-header {
  background-color: #265588!important
}
.wds-community-header::before {
  background-image: linear-gradient(270deg,rgba(38,85,136,.5) 0,rgba(38,85,136,.5) 200px,#265588 430px)!important
}
.wds-community-header .wds-button.wds-is-secondary {
  color: #dfdfdf!important;
  border-color: #dfdfdf!important
}
#globalNavigation {
  box-shadow: 0 1px 0 0 #040404!important
}
.wds-global-navigation__account-menu:hover,
.wds-global-navigation__link:hover,
.wds-global-navigation__notifications-menu:hover,
.wds-global-navigation__user-menu:hover,
.wds-global-navigation__wikis-menu:hover {
  color: #ebebeb!important
}
#GlobalNavigationWallNotifications li>a,
.WikiaBarWrapper .tools-menu li>a,
.WikiaPage .page-header__title,
.WikiaRail .edit-info-time,
.WikiaRail .rail-sticky-module .premium-recirculation-rail .content,
.ace_cursor,
.paginator-page.active,
.ui-autocomplete li>a,
.wds-global-navigation__account-menu,
.wds-global-navigation__account-menu .wds-global-navigation__account-menu-dropdown-caption,
.wds-notifications__dropdown-content,
body,
table.property-page-results .header-title {
  color: #c5c5c5!important
}
.wds-global-navigation__notifications-dropdown:hover .wds-icon-small path {
  fill: #d2d2d2!important
}
.wds-global-navigation__user-menu .wds-avatar__image {
  border-color: #383838!important;
  fill: #383838!important
}
.wds-global-navigation__user-menu:hover .wds-avatar__image {
  border-color: #848484!important;
  fill: #848484!important
}
.wds-global-navigation-wrapper .wds-dropdown__toggle-chevron {
  fill: #ff6a64!important
}
.WikiaRail #WikiaAdInContentPlaceHolder svg,
.WikiaRail #wikia-recent-activity h2.has-icon svg,
.wds-global-navigation__search-label path {
  fill: #9f9f9f!important
}
.wds-global-navigation__search-input::-webkit-input-placeholder {
  color: #9f9f9f!important
}
.wds-global-navigation__search-input:-ms-input-placeholder {
  color: #9f9f9f!important
}
.wds-global-navigation__search-input::-ms-input-placeholder {
  color: #9f9f9f!important
}
.wds-global-navigation__search-input::placeholder {
  color: #9f9f9f!important
}
.wds-global-navigation__search-submit.active,
.wds-global-navigation__search-submit:active,
.wds-global-navigation__search-submit:hover {
  color: #dfdfdf!important;
  background-image: none!important;
  background-color: #4082ca!important;
  border-color: #4082ca!important
}
.wds-global-navigation__search-close,
.wds-global-navigation__search-close:hover {
  background-color: transparent!important
}
.WikiaArticle h2,
.WikiaRail #wikia-recent-activity h2.has-icon,
.wds-global-navigation__search-input-wrapper {
  border-bottom-color: #52555a!important
}
#global-navigation-anon-sign-in.active,
#global-navigation-anon-sign-in:active,
#global-navigation-anon-sign-in:hover,
.wds-sign-out__button.active,
.wds-sign-out__button:active,
.wds-sign-out__button:hover {
  color: #dfdfdf!important;
  background-image: none!important;
  background-color: #4082ca!important;
  border-color: #4082ca!important
}
#GlobalNavigationWallNotifications .notification.empty,
.wds-notifications__dropdown-content .wds-notifications__zero-state {
  color: #9f9f9f!important
}
#GlobalNavigationWallNotifications .notification {
  border: none!important;
  color: #c5c5c5!important;
  background: #2b2b2b!important
}
.CategorySelect.articlePage div.toolbar {
  background-color: #1a1a1a!important;
  border-top-color: #52555a!important
}
.CategorySelect.articlePage .category.new {
  border-color: #656565!important;
  color: #dfdfdf!important
}
.CategorySelect.articlePage .category.new,
.CategorySelect.articlePage .category.new ul.toolbar {
  background-color: #656565!important
}
.WikiaArticle li.gallerybox {
  border-color: #52555a!important;
  background-color: #2b2b2b!important
}
.WikiaArticle li.gallerybox div.thumb {
  background: #323232!important;
  border-color: #323232!important
}
.ns-120 .mw-content-text > ul li b:first-child,
.ns-120 .mw-content-text > ul ul li b:first-child,
.transcript > ul li b:first-child,
.transcript > ul ul li b:first-child {
  color: #01c023!important
}
.ns-120 .mw-content-text > ul li:hover li:hover,
.ns-120 .mw-content-text > ul li:hover li:hover li:hover li:hover,
.ns-120 .mw-content-text > ul li:hover li:hover li:hover li:hover li:hover li:hover,
.ns-120 .mw-content-text > ul li:hover li:hover li:hover li:hover li:hover li:hover li:hover li:hover,
.ns-120 .mw-content-text > ul ul li:hover li:hover,
.ns-120 .mw-content-text > ul ul li:hover li:hover li:hover li:hover,
.ns-120 .mw-content-text > ul ul li:hover li:hover li:hover li:hover li:hover li:hover,
.ns-120 .mw-content-text > ul ul li:hover li:hover li:hover li:hover li:hover li:hover li:hover li:hover,
.transcript > ul li:hover li:hover,
.transcript > ul li:hover li:hover li:hover li:hover,
.transcript > ul li:hover li:hover li:hover li:hover li:hover li:hover,
.transcript > ul li:hover li:hover li:hover li:hover li:hover li:hover li:hover li:hover,
.transcript > ul ul li:hover li:hover,
.transcript > ul ul li:hover li:hover li:hover li:hover,
.transcript > ul ul li:hover li:hover li:hover li:hover li:hover li:hover,
.transcript > ul ul li:hover li:hover li:hover li:hover li:hover li:hover li:hover li:hover {
  background-color: #212121!important
}
.editpage-editarea,
.source-css,
.source-javascript,
.source-lua {
  background-color: #262626!important;
  color: #b8b8b8!important
}
.ace_marker-layer .ace_active-line {
  background-color: #262626!important;
  border-top: 2px solid #363636!important;
  border-bottom: 2px solid #363636!important
}
.ace_gutter-active-line {
  background-color: #3a3a3a!important
}
.ace_marker-layer .ace_selection {
  background-color: rgba(121,121,121,.2)!important
}
.ace_scrollbar-h::-webkit-scrollbar,
.ace_scrollbar::-webkit-scrollbar {
  width: 13px!important
}
.ace_scrollbar-h::-webkit-scrollbar-track,
.ace_scrollbar::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  border-radius: 10px!important;
  background-color: #262626!important;
  border: 1px solid #2b2b2b!important
}
.ace_scrollbar-h::-webkit-scrollbar-thumb,
.ace_scrollbar::-webkit-scrollbar-thumb {
  border-radius: 10px!important;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  background-color: #404040!important;
  border: 1px solid #191919!important
}
.ace_scrollbar-h::-webkit-scrollbar-corner,
.ace_scrollbar::-webkit-scrollbar-corner {
  background-color: transparent!important
}
.ace_storage,
.kw0 {
  color: #14dc1c!important
}
.ace_indent-guide {
  -webkit-filter: brightness(60%)!important;
  filter: brightness(60%)!important
}
.ace_entity.ace_name.ace_function,
.ace_entity.ace_name.ace_tag,
.ace_support.ace_function,
.ace_variable,
.ace_variable.ace_language,
.kw3,
.me1 {
  color: #4ca2df!important
}
.ace_keyword,
.ace_meta,
.ace_support.ace_class,
.ace_support.ace_type,
.kw1 {
  color: #c9e411!important
}
#mw-scribunto-console,
.mw-scribunto-console-fieldset {
  color: #c5c5c5!important;
  background-color: #303030!important
}
.mw-scribunto-message {
  background: 0 0!important;
  color: #acacac!important
}
.mw-scribunto-normalOutput,
.mw-scribunto-print {
  background: 0 0!important;
  color: #c5c5c5!important
}
#mw-scribunto-input::-webkit-input-placeholder {
  color: #9f9f9f!important
}
#mw-scribunto-input:-ms-input-placeholder {
  color: #9f9f9f!important
}
#mw-scribunto-input::-ms-input-placeholder {
  color: #9f9f9f!important
}
#mw-scribunto-input::placeholder {
  color: #9f9f9f!important
}
body.background-dynamic.skin-oasis {
  background-color: #1b1b1b!important
}
body.background-dynamic.skin-oasis::before {
  margin-left: -1282px!important
}
body.background-dynamic.skin-oasis::after {
  margin-right: -1282px!important;
  background-position: -710px 0!important
}
body.background-dynamic.skin-oasis::after,
body.background-dynamic.skin-oasis::before {
  background-image: url(https://i.imgur.com/7qET5bp.jpg)!important;
  width: 790px!important;
  height: 844px!important;
  box-shadow: inset 0 0 30px 20px #1b1b1b!important
}
.WikiaArticle {
  box-shadow: none!important;
  border: none!important
}
a {
  color: #6bbaea!important
}
a.new {
  color: #ba0000!important
}
.WikiaBarWrapper a,
.WikiaRail #rsw-discord .wds-button {
  color: #fff!important
}
.wds-global-footer__link {
  color: #c5ced9!important
}
#BOTTOM_LEADERBOARD,
#WikiaAdInContentPlaceHolder,
#WikiaTopAds,
#mixed-content-footer .mcf-content,
#top-right-boxad-wrapper {
  display: none!important
}`;
if (typeof GM_addStyle != "undefined") {
    GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
    PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
    addStyle(css);
} else {
    var node = document.createElement("style");
    node.type = "text/css";
    node.appendChild(document.createTextNode(css));
    var heads = document.getElementsByTagName("head");
    if (heads.length > 0) {
        heads[0].appendChild(node);
    } else {
        // no head yet, stick it whereever
        document.documentElement.appendChild(node);
    }
}
})();