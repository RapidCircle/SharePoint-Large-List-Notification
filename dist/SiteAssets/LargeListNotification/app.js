"use strict";define(["jquery","services/ListService","Constants","Controller","Search","templates/tpl","css!styles/main.css","css!//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"],function(t,e,s,a,i,r){var n=n||{};n.NotificationController=a,window.RC=n,ExecuteOrDelayUntilScriptLoaded(function(){SP.UI.Status.removeAllStatus(!0);var a=s.ThresholdMessage[0].error,n=t.map(t.find("div[webpartid]"),function(t){return t.innerHTML}),o=n.filter(function(t,e){return t.indexOf(a)>=0});if(o.length>0){e.GetList({ListId:_spPageContextInfo.pageListId,OData:"$select=BaseType"}).done(function(t){if(t.d.BaseType==s.SPBaseType.DocumentLibrary){var e=SP.UI.Status.addStatus("Warning:",s.Messages.NotificationMessageForLibrary);SP.UI.Status.setStatusPriColor(e,"yellow")}else{var e=SP.UI.Status.addStatus("Warning:",s.Messages.NotificationMessageForList);SP.UI.Status.setStatusPriColor(e,"yellow")}}).fail(function(t){console.error(t)});var c=t.find("#DeltaPlaceHolderMain");$(c).append(r.SearchPage()),i.Initialize()}},"sp.js")});