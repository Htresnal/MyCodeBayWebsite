function getCurrentPageName()
{
   var path = window.location.pathname;
   var page = path.split("/").pop();
return page;
}

function setCurrentMenu()
{
   currentPage=getCurrentPageName();
   var elementToSelect;
   if (currentPage=="")
   {
      elementToSelect = document.getElementById("nav_index");
      elementToSelect.setAttribute("id", "nav_selected");
   }
   else if (currentPage=="articles")
   {
      elementToSelect = document.getElementById("nav_articles");
      elementToSelect.setAttribute("id", "nav_selected");
   }
   else if (currentPage=="programs")
   {
      elementToSelect = document.getElementById("nav_programs");
      elementToSelect.setAttribute("id", "nav_selected");
   }
   else if (currentPage=="links")
   {
      elementToSelect = document.getElementById("nav_links");
      elementToSelect.setAttribute("id", "nav_selected");
   }
}