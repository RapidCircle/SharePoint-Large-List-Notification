define(["jquery"],function(e){function r(e){for(var r=jQuery.Deferred(),n=new SP.ClientContext.get_current,s=n.get_web(),t=new SP.BasePermissions,i=0;i<e.length;i++)t.set(e[i]);var u=s.doesUserHavePermissions(t);return n.executeQueryAsync(function(){var e=u.get_value();r.resolve(e)},function(e,n){r.reject(n.get_message())}),r.promise()}this.requestDigest=null;return{CheckPermissions:r}});