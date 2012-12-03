/**
 * @constructor
 */
function MenuController(tabs) {
  this.tabs_ = tabs
  $('#file-menu-new').click(this.newTab_.bind(this));
  $('#file-menu-open').click(this.open_.bind(this));
  $('#file-menu-saveas').click(this.saveas_.bind(this));
  $(document).bind('newtab', this.onNewTab.bind(this));
  $(document).bind('tabrenamed', this.onTabRenamed.bind(this));
}

MenuController.prototype.onNewTab = function(e, tab) {
  var id = tab.getId();
  var name = tab.getName();
  var listItem = $('<li id="' + id + '"><a href="">' + name + '</a></li>');
  listItem.appendTo($('#tabs-list'));
  listItem.click(this.tabButtonClicked_.bind(this, id));
};

MenuController.prototype.onTabRenamed = function(e, tab) {
  $('#' + tab.getId() + ' a').text(tab.getName());
};

MenuController.prototype.newTab_ = function() {
  this.tabs_.newTab();
  return false;
};

MenuController.prototype.open_ = function() {
  this.tabs_.openFile();
  return false;
};

MenuController.prototype.saveas_ = function() {
  this.tabs_.saveAs();
  return false;
};

MenuController.prototype.tabButtonClicked_ = function(id) {
  this.tabs_.showTab(id);
  return false;
};