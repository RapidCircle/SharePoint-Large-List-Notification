define(["Services/SearchService","Services/ListService","templates/tpl","knockout","jquery","listjs","listjsPagination"],function(e,t,a,r,n,s,l){var i=function(){var a=this;a.table_data=r.observableArray([]),a.table_data_headers=r.observableArray([]),a.table_heading=r.observable("Results"),a.current_page=r.observable(),a.SearchTable=function(){e.GetManagedProperties({ContentType:"item",ListId:_spPageContextInfo.pageListId}).done(function(r){t.GetView({ListId:_spPageContextInfo.pageListId,OData:"$filter=DefaultView eq true&$expand=ViewFields"}).done(function(t){var n=t.d.results[0].ViewFields.Items.results,i=r.map(function(e){return e.RefinementName}),u=n.map(function(e){return i.find(function(t){return t.startsWith(e)})}).filter(function(e){return void 0!=e}),o={request:{__metadata:{type:"Microsoft.Office.Server.Search.REST.SearchRequest"},Querytext:document.getElementById("search_box").value,QueryTemplate:"{searchterms} ListId:"+_spPageContextInfo.pageListId.replace("{","").replace("}",""),TrimDuplicates:!0,RowLimit:50,SelectProperties:{results:u}}};e.Query(o).done(function(e){for(var t=[],r=0;r<e.d.postquery.PrimaryQueryResult.RelevantResults.Table.Rows.results.length;r++){for(var n=e.d.postquery.PrimaryQueryResult.RelevantResults.Table.Rows.results[r].Cells.results,i={},o=0;o<n.length;o++)i[n[o].Key]=n[o].Value?n[o].Value:"(no data)";t.push(i)}a.table_data([]),a.table_data_headers([]),a.table_data_headers.push.apply(a.table_data_headers,u),a.table_data.push.apply(a.table_data,t);for(var d="<tr>",r=0;r<a.table_data_headers().length;r++)d+="<td class='"+a.table_data_headers()[r]+"'></td>";d+="</tr>";var c={valueNames:a.table_data_headers(),item:d,page:10,plugins:[l({})]};new s("results_table_container",c,a.table_data())}).fail(function(e){console.log(e)})}).fail(function(e){console.error(e)})}).fail(function(e){console.error(e)})}},u={};return u.Initialize=function(){r.applyBindings(new i),r.bindingHandlers.delegatedHandler={init:function(e,t){var a=r.utils.unwrapObservable(t())||[];r.utils.arrayForEach(a,function(t){r.utils.registerEventHandler(e,t,createDelegatedHandler(t,e))})}}},u});