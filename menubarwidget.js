var headerMenu = widgetUtils.findObject(model.jsonModel, "id", "HEADER_APP_MENU_BAR");
if (headerMenu != null) {
headerMenu.config.widgets.push({
id: "HEADER_CUSTOM_PROFILE_LINK",
name: "alfresco/menus/AlfMenuBarItem",
config: {
label: "Sponsor-Page",
targetUrl: "/sponsor-page" //Here you can add your page url.
}
});
}                     
