(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{115:function(t,i,n){"use strict";n.r(i);var o=n(12),e=n(4),r=n(11),s=n(2),c=n(31),a=n(28),h=n(6),u=n(15),p={ACCURACY:"accuracy",ACCURACY_GEOMETRY:"accuracyGeometry",ALTITUDE:"altitude",ALTITUDE_ACCURACY:"altitudeAccuracy",HEADING:"heading",POSITION:"position",PROJECTION:"projection",SPEED:"speed",TRACKING:"tracking",TRACKING_OPTIONS:"trackingOptions"},d=function(t){function i(i){t.call(this,s.a.ERROR),this.code=i.code,this.message=i.message}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i}(r.a),g=function(t){function i(i){t.call(this);var n=i||{};this.position_=null,this.transform_=u.h,this.watchId_=void 0,Object(e.a)(this,Object(o.b)(p.PROJECTION),this.handleProjectionChanged_,this),Object(e.a)(this,Object(o.b)(p.TRACKING),this.handleTrackingChanged_,this),void 0!==n.projection&&this.setProjection(n.projection),void 0!==n.trackingOptions&&this.setTrackingOptions(n.trackingOptions),this.setTracking(void 0!==n.tracking&&n.tracking)}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.disposeInternal=function(){this.setTracking(!1),t.prototype.disposeInternal.call(this)},i.prototype.handleProjectionChanged_=function(){var t=this.getProjection();t&&(this.transform_=Object(u.g)(Object(u.d)("EPSG:4326"),t),this.position_&&this.set(p.POSITION,this.transform_(this.position_)))},i.prototype.handleTrackingChanged_=function(){if(a.d){var t=this.getTracking();t&&void 0===this.watchId_?this.watchId_=navigator.geolocation.watchPosition(this.positionChange_.bind(this),this.positionError_.bind(this),this.getTrackingOptions()):t||void 0===this.watchId_||(navigator.geolocation.clearWatch(this.watchId_),this.watchId_=void 0)}},i.prototype.positionChange_=function(t){var i=t.coords;this.set(p.ACCURACY,i.accuracy),this.set(p.ALTITUDE,null===i.altitude?void 0:i.altitude),this.set(p.ALTITUDE_ACCURACY,null===i.altitudeAccuracy?void 0:i.altitudeAccuracy),this.set(p.HEADING,null===i.heading?void 0:Object(h.i)(i.heading)),this.position_?(this.position_[0]=i.longitude,this.position_[1]=i.latitude):this.position_=[i.longitude,i.latitude];var n=this.transform_(this.position_);this.set(p.POSITION,n),this.set(p.SPEED,null===i.speed?void 0:i.speed);var o=Object(c.a)(this.position_,i.accuracy);o.applyTransform(this.transform_),this.set(p.ACCURACY_GEOMETRY,o),this.changed()},i.prototype.positionError_=function(t){this.setTracking(!1),this.dispatchEvent(new d(t))},i.prototype.getAccuracy=function(){return this.get(p.ACCURACY)},i.prototype.getAccuracyGeometry=function(){return this.get(p.ACCURACY_GEOMETRY)||null},i.prototype.getAltitude=function(){return this.get(p.ALTITUDE)},i.prototype.getAltitudeAccuracy=function(){return this.get(p.ALTITUDE_ACCURACY)},i.prototype.getHeading=function(){return this.get(p.HEADING)},i.prototype.getPosition=function(){return this.get(p.POSITION)},i.prototype.getProjection=function(){return this.get(p.PROJECTION)},i.prototype.getSpeed=function(){return this.get(p.SPEED)},i.prototype.getTracking=function(){return this.get(p.TRACKING)},i.prototype.getTrackingOptions=function(){return this.get(p.TRACKING_OPTIONS)},i.prototype.setProjection=function(t){this.set(p.PROJECTION,Object(u.d)(t))},i.prototype.setTracking=function(t){this.set(p.TRACKING,t)},i.prototype.setTrackingOptions=function(t){this.set(p.TRACKING_OPTIONS,t)},i}(o.a);i.default=g},28:function(t,i,n){"use strict";n.d(i,"c",function(){return e}),n.d(i,"h",function(){return r}),n.d(i,"j",function(){return s}),n.d(i,"e",function(){return c}),n.d(i,"b",function(){return a}),n.d(i,"a",function(){return h}),n.d(i,"d",function(){return u}),n.d(i,"i",function(){return p}),n.d(i,"g",function(){return d}),n.d(i,"f",function(){return g});var o="undefined"!=typeof navigator?navigator.userAgent.toLowerCase():"",e=-1!==o.indexOf("firefox"),r=-1!==o.indexOf("safari")&&-1==o.indexOf("chrom"),s=-1!==o.indexOf("webkit")&&-1==o.indexOf("edge"),c=-1!==o.indexOf("macintosh"),a=window.devicePixelRatio||1,h=function(){var t=!1;try{t=!!document.createElement("canvas").getContext("2d").setLineDash}catch(t){}return t}(),u="geolocation"in navigator,p="ontouchstart"in window,d="PointerEvent"in window,g=!!navigator.msPointerEnabled}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvR2VvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2hhcy5qcyJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiciIsIl9fd2VicGFja19leHBvcnRzX18iLCJfT2JqZWN0X2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18iLCJfZXZlbnRzX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18iLCJfZXZlbnRzX0V2ZW50X2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18iLCJfZXZlbnRzX0V2ZW50VHlwZV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fIiwiX2dlb21fUG9seWdvbl9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9fIiwiX2hhc19qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9fIiwiX21hdGhfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzZfXyIsIl9wcm9qX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV83X18iLCJQcm9wZXJ0eSIsIkFDQ1VSQUNZIiwiQUNDVVJBQ1lfR0VPTUVUUlkiLCJBTFRJVFVERSIsIkFMVElUVURFX0FDQ1VSQUNZIiwiSEVBRElORyIsIlBPU0lUSU9OIiwiUFJPSkVDVElPTiIsIlNQRUVEIiwiVFJBQ0tJTkciLCJUUkFDS0lOR19PUFRJT05TIiwiR2VvbG9jYXRpb25FcnJvciIsIkV2ZW50IiwiZXJyb3IiLCJjYWxsIiwidGhpcyIsIkVSUk9SIiwiY29kZSIsIm1lc3NhZ2UiLCJfX3Byb3RvX18iLCJwcm90b3R5cGUiLCJPYmplY3QiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsIkdlb2xvY2F0aW9uIiwiQmFzZU9iamVjdCIsIm9wdF9vcHRpb25zIiwib3B0aW9ucyIsInBvc2l0aW9uXyIsInRyYW5zZm9ybV8iLCJ3YXRjaElkXyIsInVuZGVmaW5lZCIsImhhbmRsZVByb2plY3Rpb25DaGFuZ2VkXyIsImhhbmRsZVRyYWNraW5nQ2hhbmdlZF8iLCJwcm9qZWN0aW9uIiwic2V0UHJvamVjdGlvbiIsInRyYWNraW5nT3B0aW9ucyIsInNldFRyYWNraW5nT3B0aW9ucyIsInNldFRyYWNraW5nIiwidHJhY2tpbmciLCJkaXNwb3NlSW50ZXJuYWwiLCJnZXRQcm9qZWN0aW9uIiwic2V0IiwiZ2V0VHJhY2tpbmciLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsIndhdGNoUG9zaXRpb24iLCJwb3NpdGlvbkNoYW5nZV8iLCJiaW5kIiwicG9zaXRpb25FcnJvcl8iLCJnZXRUcmFja2luZ09wdGlvbnMiLCJjbGVhcldhdGNoIiwicG9zaXRpb24iLCJjb29yZHMiLCJhY2N1cmFjeSIsImFsdGl0dWRlIiwiYWx0aXR1ZGVBY2N1cmFjeSIsImhlYWRpbmciLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsInByb2plY3RlZFBvc2l0aW9uIiwic3BlZWQiLCJnZW9tZXRyeSIsImFwcGx5VHJhbnNmb3JtIiwiY2hhbmdlZCIsImRpc3BhdGNoRXZlbnQiLCJnZXRBY2N1cmFjeSIsImdldCIsImdldEFjY3VyYWN5R2VvbWV0cnkiLCJnZXRBbHRpdHVkZSIsImdldEFsdGl0dWRlQWNjdXJhY3kiLCJnZXRIZWFkaW5nIiwiZ2V0UG9zaXRpb24iLCJnZXRTcGVlZCIsImQiLCJGSVJFRk9YIiwiU0FGQVJJIiwiV0VCS0lUIiwiTUFDIiwiREVWSUNFX1BJWEVMX1JBVElPIiwiQ0FOVkFTX0xJTkVfREFTSCIsIkdFT0xPQ0FUSU9OIiwiVE9VQ0giLCJQT0lOVEVSIiwiTVNQT0lOVEVSIiwidWEiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwiaGFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZ2V0Q29udGV4dCIsInNldExpbmVEYXNoIiwiZSJdLCJtYXBwaW5ncyI6IjBGQUFBQSxFQUFBQyxFQUFBQyxHQUFBLElBQUFDLEVB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QUEwQyxVQUFBQyxjQUFBLEdBTU9aLEdBQUEsSUFBQVUsRUFBQUcsUUFBQSxXQU1BWixHQUFBLElBQUFTLEVBQUFHLFFBQUEsZUFBQUgsRUFBQUcsUUFBQSxTQU1BWCxHQUFBLElBQUFRLEVBQUFHLFFBQUEsZUFBQUgsRUFBQUcsUUFBQSxRQU1BVixHQUFBLElBQUFPLEVBQUFHLFFBQUEsYUFVQVQsRUFBQVUsT0FBQUMsa0JBQUEsRUFPQVYsRUFBQSxXQUNQLElBQUFXLEdBQUEsRUFDQSxJQUNBQSxJQUFBQyxTQUFBQyxjQUFBLFVBQUFDLFdBQUEsTUFBQUMsWUFDRyxNQUFBQyxJQUdILE9BQUFMLEVBUE8sR0FpQkFWLEVBQUEsZ0JBQUFyQyxVQVNBc0MsRUFBQSxpQkFBQU8sT0FRQU4sRUFBQSxpQkFBQU0sT0FRQUwsSUFBQXhDLFVBQUEiLCJmaWxlIjoib2wvR2VvbG9jYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBtb2R1bGUgb2wvR2VvbG9jYXRpb25cbiAqL1xuaW1wb3J0IEJhc2VPYmplY3QsIHtnZXRDaGFuZ2VFdmVudFR5cGV9IGZyb20gJy4vT2JqZWN0LmpzJztcbmltcG9ydCB7bGlzdGVufSBmcm9tICcuL2V2ZW50cy5qcyc7XG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudHMvRXZlbnQuanMnO1xuaW1wb3J0IEV2ZW50VHlwZSBmcm9tICcuL2V2ZW50cy9FdmVudFR5cGUuanMnO1xuaW1wb3J0IHtjaXJjdWxhciBhcyBjaXJjdWxhclBvbHlnb259IGZyb20gJy4vZ2VvbS9Qb2x5Z29uLmpzJztcbmltcG9ydCB7R0VPTE9DQVRJT059IGZyb20gJy4vaGFzLmpzJztcbmltcG9ydCB7dG9SYWRpYW5zfSBmcm9tICcuL21hdGguanMnO1xuaW1wb3J0IHtnZXQgYXMgZ2V0UHJvamVjdGlvbiwgZ2V0VHJhbnNmb3JtRnJvbVByb2plY3Rpb25zLCBpZGVudGl0eVRyYW5zZm9ybX0gZnJvbSAnLi9wcm9qLmpzJztcblxuXG4vKipcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbnZhciBQcm9wZXJ0eSA9IHtcbiAgQUNDVVJBQ1k6ICdhY2N1cmFjeScsXG4gIEFDQ1VSQUNZX0dFT01FVFJZOiAnYWNjdXJhY3lHZW9tZXRyeScsXG4gIEFMVElUVURFOiAnYWx0aXR1ZGUnLFxuICBBTFRJVFVERV9BQ0NVUkFDWTogJ2FsdGl0dWRlQWNjdXJhY3knLFxuICBIRUFESU5HOiAnaGVhZGluZycsXG4gIFBPU0lUSU9OOiAncG9zaXRpb24nLFxuICBQUk9KRUNUSU9OOiAncHJvamVjdGlvbicsXG4gIFNQRUVEOiAnc3BlZWQnLFxuICBUUkFDS0lORzogJ3RyYWNraW5nJyxcbiAgVFJBQ0tJTkdfT1BUSU9OUzogJ3RyYWNraW5nT3B0aW9ucydcbn07XG5cblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBFdmVudHMgZW1pdHRlZCBvbiBHZW9sb2NhdGlvbiBlcnJvci5cbiAqL1xudmFyIEdlb2xvY2F0aW9uRXJyb3IgPSAvKkBfX1BVUkVfXyovKGZ1bmN0aW9uIChFdmVudCkge1xuICBmdW5jdGlvbiBHZW9sb2NhdGlvbkVycm9yKGVycm9yKSB7XG4gICAgRXZlbnQuY2FsbCh0aGlzLCBFdmVudFR5cGUuRVJST1IpO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNvZGUgPSBlcnJvci5jb2RlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICB9XG5cbiAgaWYgKCBFdmVudCApIEdlb2xvY2F0aW9uRXJyb3IuX19wcm90b19fID0gRXZlbnQ7XG4gIEdlb2xvY2F0aW9uRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRXZlbnQgJiYgRXZlbnQucHJvdG90eXBlICk7XG4gIEdlb2xvY2F0aW9uRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VvbG9jYXRpb25FcnJvcjtcblxuICByZXR1cm4gR2VvbG9jYXRpb25FcnJvcjtcbn0oRXZlbnQpKTtcblxuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3RyYWNraW5nPWZhbHNlXSBTdGFydCBUcmFja2luZyByaWdodCBhZnRlclxuICogaW5zdGFudGlhdGlvbi5cbiAqIEBwcm9wZXJ0eSB7UG9zaXRpb25PcHRpb25zfSBbdHJhY2tpbmdPcHRpb25zXSBUcmFja2luZyBvcHRpb25zLlxuICogU2VlIGh0dHA6Ly93d3cudzMub3JnL1RSL2dlb2xvY2F0aW9uLUFQSS8jcG9zaXRpb25fb3B0aW9uc19pbnRlcmZhY2UuXG4gKiBAcHJvcGVydHkge2ltcG9ydChcIi4vcHJvai5qc1wiKS5Qcm9qZWN0aW9uTGlrZX0gW3Byb2plY3Rpb25dIFRoZSBwcm9qZWN0aW9uIHRoZSBwb3NpdGlvblxuICogaXMgcmVwb3J0ZWQgaW4uXG4gKi9cblxuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIEhlbHBlciBjbGFzcyBmb3IgcHJvdmlkaW5nIEhUTUw1IEdlb2xvY2F0aW9uIGNhcGFiaWxpdGllcy5cbiAqIFRoZSBbR2VvbG9jYXRpb24gQVBJXShodHRwOi8vd3d3LnczLm9yZy9UUi9nZW9sb2NhdGlvbi1BUEkvKVxuICogaXMgdXNlZCB0byBsb2NhdGUgYSB1c2VyJ3MgcG9zaXRpb24uXG4gKlxuICogVG8gZ2V0IG5vdGlmaWVkIG9mIHBvc2l0aW9uIGNoYW5nZXMsIHJlZ2lzdGVyIGEgbGlzdGVuZXIgZm9yIHRoZSBnZW5lcmljXG4gKiBgY2hhbmdlYCBldmVudCBvbiB5b3VyIGluc3RhbmNlIG9mIHtAbGluayBtb2R1bGU6b2wvR2VvbG9jYXRpb25+R2VvbG9jYXRpb259LlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIHZhciBnZW9sb2NhdGlvbiA9IG5ldyBHZW9sb2NhdGlvbih7XG4gKiAgICAgICAvLyB0YWtlIHRoZSBwcm9qZWN0aW9uIHRvIHVzZSBmcm9tIHRoZSBtYXAncyB2aWV3XG4gKiAgICAgICBwcm9qZWN0aW9uOiB2aWV3LmdldFByb2plY3Rpb24oKVxuICogICAgIH0pO1xuICogICAgIC8vIGxpc3RlbiB0byBjaGFuZ2VzIGluIHBvc2l0aW9uXG4gKiAgICAgZ2VvbG9jYXRpb24ub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGV2dCkge1xuICogICAgICAgd2luZG93LmNvbnNvbGUubG9nKGdlb2xvY2F0aW9uLmdldFBvc2l0aW9uKCkpO1xuICogICAgIH0pO1xuICpcbiAqIEBmaXJlcyBlcnJvclxuICogQGFwaVxuICovXG52YXIgR2VvbG9jYXRpb24gPSAvKkBfX1BVUkVfXyovKGZ1bmN0aW9uIChCYXNlT2JqZWN0KSB7XG4gIGZ1bmN0aW9uIEdlb2xvY2F0aW9uKG9wdF9vcHRpb25zKSB7XG5cbiAgICBCYXNlT2JqZWN0LmNhbGwodGhpcyk7XG5cbiAgICB2YXIgb3B0aW9ucyA9IG9wdF9vcHRpb25zIHx8IHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHVucHJvamVjdGVkIChFUFNHOjQzMjYpIGRldmljZSBwb3NpdGlvbi5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX1cbiAgICAgKi9cbiAgICB0aGlzLnBvc2l0aW9uXyA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtpbXBvcnQoXCIuL3Byb2ouanNcIikuVHJhbnNmb3JtRnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy50cmFuc2Zvcm1fID0gaWRlbnRpdHlUcmFuc2Zvcm07XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtudW1iZXJ8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHRoaXMud2F0Y2hJZF8gPSB1bmRlZmluZWQ7XG5cbiAgICBsaXN0ZW4oXG4gICAgICB0aGlzLCBnZXRDaGFuZ2VFdmVudFR5cGUoUHJvcGVydHkuUFJPSkVDVElPTiksXG4gICAgICB0aGlzLmhhbmRsZVByb2plY3Rpb25DaGFuZ2VkXywgdGhpcyk7XG4gICAgbGlzdGVuKFxuICAgICAgdGhpcywgZ2V0Q2hhbmdlRXZlbnRUeXBlKFByb3BlcnR5LlRSQUNLSU5HKSxcbiAgICAgIHRoaXMuaGFuZGxlVHJhY2tpbmdDaGFuZ2VkXywgdGhpcyk7XG5cbiAgICBpZiAob3B0aW9ucy5wcm9qZWN0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc2V0UHJvamVjdGlvbihvcHRpb25zLnByb2plY3Rpb24pO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy50cmFja2luZ09wdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zZXRUcmFja2luZ09wdGlvbnMob3B0aW9ucy50cmFja2luZ09wdGlvbnMpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0VHJhY2tpbmcob3B0aW9ucy50cmFja2luZyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy50cmFja2luZyA6IGZhbHNlKTtcblxuICB9XG5cbiAgaWYgKCBCYXNlT2JqZWN0ICkgR2VvbG9jYXRpb24uX19wcm90b19fID0gQmFzZU9iamVjdDtcbiAgR2VvbG9jYXRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZU9iamVjdCAmJiBCYXNlT2JqZWN0LnByb3RvdHlwZSApO1xuICBHZW9sb2NhdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW9sb2NhdGlvbjtcblxuICAvKipcbiAgICogQGluaGVyaXREb2NcbiAgICovXG4gIEdlb2xvY2F0aW9uLnByb3RvdHlwZS5kaXNwb3NlSW50ZXJuYWwgPSBmdW5jdGlvbiBkaXNwb3NlSW50ZXJuYWwgKCkge1xuICAgIHRoaXMuc2V0VHJhY2tpbmcoZmFsc2UpO1xuICAgIEJhc2VPYmplY3QucHJvdG90eXBlLmRpc3Bvc2VJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgR2VvbG9jYXRpb24ucHJvdG90eXBlLmhhbmRsZVByb2plY3Rpb25DaGFuZ2VkXyA9IGZ1bmN0aW9uIGhhbmRsZVByb2plY3Rpb25DaGFuZ2VkXyAoKSB7XG4gICAgdmFyIHByb2plY3Rpb24gPSB0aGlzLmdldFByb2plY3Rpb24oKTtcbiAgICBpZiAocHJvamVjdGlvbikge1xuICAgICAgdGhpcy50cmFuc2Zvcm1fID0gZ2V0VHJhbnNmb3JtRnJvbVByb2plY3Rpb25zKFxuICAgICAgICBnZXRQcm9qZWN0aW9uKCdFUFNHOjQzMjYnKSwgcHJvamVjdGlvbik7XG4gICAgICBpZiAodGhpcy5wb3NpdGlvbl8pIHtcbiAgICAgICAgdGhpcy5zZXQoUHJvcGVydHkuUE9TSVRJT04sIHRoaXMudHJhbnNmb3JtXyh0aGlzLnBvc2l0aW9uXykpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIEdlb2xvY2F0aW9uLnByb3RvdHlwZS5oYW5kbGVUcmFja2luZ0NoYW5nZWRfID0gZnVuY3Rpb24gaGFuZGxlVHJhY2tpbmdDaGFuZ2VkXyAoKSB7XG4gICAgaWYgKEdFT0xPQ0FUSU9OKSB7XG4gICAgICB2YXIgdHJhY2tpbmcgPSB0aGlzLmdldFRyYWNraW5nKCk7XG4gICAgICBpZiAodHJhY2tpbmcgJiYgdGhpcy53YXRjaElkXyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMud2F0Y2hJZF8gPSBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24ud2F0Y2hQb3NpdGlvbihcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uQ2hhbmdlXy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHRoaXMucG9zaXRpb25FcnJvcl8uYmluZCh0aGlzKSxcbiAgICAgICAgICB0aGlzLmdldFRyYWNraW5nT3B0aW9ucygpKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRyYWNraW5nICYmIHRoaXMud2F0Y2hJZF8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uY2xlYXJXYXRjaCh0aGlzLndhdGNoSWRfKTtcbiAgICAgICAgdGhpcy53YXRjaElkXyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7UG9zaXRpb259IHBvc2l0aW9uIHBvc2l0aW9uIGV2ZW50LlxuICAgKi9cbiAgR2VvbG9jYXRpb24ucHJvdG90eXBlLnBvc2l0aW9uQ2hhbmdlXyA9IGZ1bmN0aW9uIHBvc2l0aW9uQ2hhbmdlXyAocG9zaXRpb24pIHtcbiAgICB2YXIgY29vcmRzID0gcG9zaXRpb24uY29vcmRzO1xuICAgIHRoaXMuc2V0KFByb3BlcnR5LkFDQ1VSQUNZLCBjb29yZHMuYWNjdXJhY3kpO1xuICAgIHRoaXMuc2V0KFByb3BlcnR5LkFMVElUVURFLFxuICAgICAgY29vcmRzLmFsdGl0dWRlID09PSBudWxsID8gdW5kZWZpbmVkIDogY29vcmRzLmFsdGl0dWRlKTtcbiAgICB0aGlzLnNldChQcm9wZXJ0eS5BTFRJVFVERV9BQ0NVUkFDWSxcbiAgICAgIGNvb3Jkcy5hbHRpdHVkZUFjY3VyYWN5ID09PSBudWxsID9cbiAgICAgICAgdW5kZWZpbmVkIDogY29vcmRzLmFsdGl0dWRlQWNjdXJhY3kpO1xuICAgIHRoaXMuc2V0KFByb3BlcnR5LkhFQURJTkcsIGNvb3Jkcy5oZWFkaW5nID09PSBudWxsID9cbiAgICAgIHVuZGVmaW5lZCA6IHRvUmFkaWFucyhjb29yZHMuaGVhZGluZykpO1xuICAgIGlmICghdGhpcy5wb3NpdGlvbl8pIHtcbiAgICAgIHRoaXMucG9zaXRpb25fID0gW2Nvb3Jkcy5sb25naXR1ZGUsIGNvb3Jkcy5sYXRpdHVkZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9zaXRpb25fWzBdID0gY29vcmRzLmxvbmdpdHVkZTtcbiAgICAgIHRoaXMucG9zaXRpb25fWzFdID0gY29vcmRzLmxhdGl0dWRlO1xuICAgIH1cbiAgICB2YXIgcHJvamVjdGVkUG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybV8odGhpcy5wb3NpdGlvbl8pO1xuICAgIHRoaXMuc2V0KFByb3BlcnR5LlBPU0lUSU9OLCBwcm9qZWN0ZWRQb3NpdGlvbik7XG4gICAgdGhpcy5zZXQoUHJvcGVydHkuU1BFRUQsXG4gICAgICBjb29yZHMuc3BlZWQgPT09IG51bGwgPyB1bmRlZmluZWQgOiBjb29yZHMuc3BlZWQpO1xuICAgIHZhciBnZW9tZXRyeSA9IGNpcmN1bGFyUG9seWdvbih0aGlzLnBvc2l0aW9uXywgY29vcmRzLmFjY3VyYWN5KTtcbiAgICBnZW9tZXRyeS5hcHBseVRyYW5zZm9ybSh0aGlzLnRyYW5zZm9ybV8pO1xuICAgIHRoaXMuc2V0KFByb3BlcnR5LkFDQ1VSQUNZX0dFT01FVFJZLCBnZW9tZXRyeSk7XG4gICAgdGhpcy5jaGFuZ2VkKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJlZCB3aGVuIHRoZSBHZW9sb2NhdGlvbiByZXR1cm5zIGFuIGVycm9yLlxuICAgKiBAZXZlbnQgZXJyb3JcbiAgICogQGFwaVxuICAgKi9cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtQb3NpdGlvbkVycm9yfSBlcnJvciBlcnJvciBvYmplY3QuXG4gICAqL1xuICBHZW9sb2NhdGlvbi5wcm90b3R5cGUucG9zaXRpb25FcnJvcl8gPSBmdW5jdGlvbiBwb3NpdGlvbkVycm9yXyAoZXJyb3IpIHtcbiAgICB0aGlzLnNldFRyYWNraW5nKGZhbHNlKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEdlb2xvY2F0aW9uRXJyb3IoZXJyb3IpKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHRoZSBhY2N1cmFjeSBvZiB0aGUgcG9zaXRpb24gaW4gbWV0ZXJzLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ8dW5kZWZpbmVkfSBUaGUgYWNjdXJhY3kgb2YgdGhlIHBvc2l0aW9uIG1lYXN1cmVtZW50IGluXG4gICAqICAgICBtZXRlcnMuXG4gICAqIEBvYnNlcnZhYmxlXG4gICAqIEBhcGlcbiAgICovXG4gIEdlb2xvY2F0aW9uLnByb3RvdHlwZS5nZXRBY2N1cmFjeSA9IGZ1bmN0aW9uIGdldEFjY3VyYWN5ICgpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHtudW1iZXJ8dW5kZWZpbmVkfSAqLyAodGhpcy5nZXQoUHJvcGVydHkuQUNDVVJBQ1kpKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGEgZ2VvbWV0cnkgb2YgdGhlIHBvc2l0aW9uIGFjY3VyYWN5LlxuICAgKiBAcmV0dXJuIHs/aW1wb3J0KFwiLi9nZW9tL1BvbHlnb24uanNcIikuZGVmYXVsdH0gQSBnZW9tZXRyeSBvZiB0aGUgcG9zaXRpb24gYWNjdXJhY3kuXG4gICAqIEBvYnNlcnZhYmxlXG4gICAqIEBhcGlcbiAgICovXG4gIEdlb2xvY2F0aW9uLnByb3RvdHlwZS5nZXRBY2N1cmFjeUdlb21ldHJ5ID0gZnVuY3Rpb24gZ2V0QWNjdXJhY3lHZW9tZXRyeSAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIC8qKiBAdHlwZSB7P2ltcG9ydChcIi4vZ2VvbS9Qb2x5Z29uLmpzXCIpLmRlZmF1bHR9ICovICh0aGlzLmdldChQcm9wZXJ0eS5BQ0NVUkFDWV9HRU9NRVRSWSkgfHwgbnVsbClcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGFsdGl0dWRlIGFzc29jaWF0ZWQgd2l0aCB0aGUgcG9zaXRpb24uXG4gICAqIEByZXR1cm4ge251bWJlcnx1bmRlZmluZWR9IFRoZSBhbHRpdHVkZSBvZiB0aGUgcG9zaXRpb24gaW4gbWV0ZXJzIGFib3ZlIG1lYW5cbiAgICogICAgIHNlYSBsZXZlbC5cbiAgICogQG9ic2VydmFibGVcbiAgICogQGFwaVxuICAgKi9cbiAgR2VvbG9jYXRpb24ucHJvdG90eXBlLmdldEFsdGl0dWRlID0gZnVuY3Rpb24gZ2V0QWx0aXR1ZGUgKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUge251bWJlcnx1bmRlZmluZWR9ICovICh0aGlzLmdldChQcm9wZXJ0eS5BTFRJVFVERSkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGFsdGl0dWRlIGFjY3VyYWN5IG9mIHRoZSBwb3NpdGlvbi5cbiAgICogQHJldHVybiB7bnVtYmVyfHVuZGVmaW5lZH0gVGhlIGFjY3VyYWN5IG9mIHRoZSBhbHRpdHVkZSBtZWFzdXJlbWVudCBpblxuICAgKiAgICAgbWV0ZXJzLlxuICAgKiBAb2JzZXJ2YWJsZVxuICAgKiBAYXBpXG4gICAqL1xuICBHZW9sb2NhdGlvbi5wcm90b3R5cGUuZ2V0QWx0aXR1ZGVBY2N1cmFjeSA9IGZ1bmN0aW9uIGdldEFsdGl0dWRlQWNjdXJhY3kgKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUge251bWJlcnx1bmRlZmluZWR9ICovICh0aGlzLmdldChQcm9wZXJ0eS5BTFRJVFVERV9BQ0NVUkFDWSkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGhlYWRpbmcgYXMgcmFkaWFucyBjbG9ja3dpc2UgZnJvbSBOb3J0aC5cbiAgICogTm90ZTogZGVwZW5kaW5nIG9uIHRoZSBicm93c2VyLCB0aGUgaGVhZGluZyBpcyBvbmx5IGRlZmluZWQgaWYgdGhlIGBlbmFibGVIaWdoQWNjdXJhY3lgXG4gICAqIGlzIHNldCB0byBgdHJ1ZWAgaW4gdGhlIHRyYWNraW5nIG9wdGlvbnMuXG4gICAqIEByZXR1cm4ge251bWJlcnx1bmRlZmluZWR9IFRoZSBoZWFkaW5nIG9mIHRoZSBkZXZpY2UgaW4gcmFkaWFucyBmcm9tIG5vcnRoLlxuICAgKiBAb2JzZXJ2YWJsZVxuICAgKiBAYXBpXG4gICAqL1xuICBHZW9sb2NhdGlvbi5wcm90b3R5cGUuZ2V0SGVhZGluZyA9IGZ1bmN0aW9uIGdldEhlYWRpbmcgKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUge251bWJlcnx1bmRlZmluZWR9ICovICh0aGlzLmdldChQcm9wZXJ0eS5IRUFESU5HKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcG9zaXRpb24gb2YgdGhlIGRldmljZS5cbiAgICogQHJldHVybiB7aW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV8dW5kZWZpbmVkfSBUaGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgZGV2aWNlIHJlcG9ydGVkXG4gICAqICAgICBpbiB0aGUgY3VycmVudCBwcm9qZWN0aW9uLlxuICAgKiBAb2JzZXJ2YWJsZVxuICAgKiBAYXBpXG4gICAqL1xuICBHZW9sb2NhdGlvbi5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbiBnZXRQb3NpdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIC8qKiBAdHlwZSB7aW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV8dW5kZWZpbmVkfSAqLyAodGhpcy5nZXQoUHJvcGVydHkuUE9TSVRJT04pKVxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcHJvamVjdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhlIHBvc2l0aW9uLlxuICAgKiBAcmV0dXJuIHtpbXBvcnQoXCIuL3Byb2ovUHJvamVjdGlvbi5qc1wiKS5kZWZhdWx0fHVuZGVmaW5lZH0gVGhlIHByb2plY3Rpb24gdGhlIHBvc2l0aW9uIGlzXG4gICAqICAgICByZXBvcnRlZCBpbi5cbiAgICogQG9ic2VydmFibGVcbiAgICogQGFwaVxuICAgKi9cbiAgR2VvbG9jYXRpb24ucHJvdG90eXBlLmdldFByb2plY3Rpb24gPSBmdW5jdGlvbiBnZXRQcm9qZWN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgLyoqIEB0eXBlIHtpbXBvcnQoXCIuL3Byb2ovUHJvamVjdGlvbi5qc1wiKS5kZWZhdWx0fHVuZGVmaW5lZH0gKi8gKHRoaXMuZ2V0KFByb3BlcnR5LlBST0pFQ1RJT04pKVxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc3BlZWQgaW4gbWV0ZXJzIHBlciBzZWNvbmQuXG4gICAqIEByZXR1cm4ge251bWJlcnx1bmRlZmluZWR9IFRoZSBpbnN0YW50YW5lb3VzIHNwZWVkIG9mIHRoZSBkZXZpY2UgaW4gbWV0ZXJzXG4gICAqICAgICBwZXIgc2Vjb25kLlxuICAgKiBAb2JzZXJ2YWJsZVxuICAgKiBAYXBpXG4gICAqL1xuICBHZW9sb2NhdGlvbi5wcm90b3R5cGUuZ2V0U3BlZWQgPSBmdW5jdGlvbiBnZXRTcGVlZCAoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7bnVtYmVyfHVuZGVmaW5lZH0gKi8gKHRoaXMuZ2V0KFByb3BlcnR5LlNQRUVEKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGUgZGV2aWNlIGxvY2F0aW9uIGlzIGJlaW5nIHRyYWNrZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRoZSBkZXZpY2UgbG9jYXRpb24gaXMgYmVpbmcgdHJhY2tlZC5cbiAgICogQG9ic2VydmFibGVcbiAgICogQGFwaVxuICAgKi9cbiAgR2VvbG9jYXRpb24ucHJvdG90eXBlLmdldFRyYWNraW5nID0gZnVuY3Rpb24gZ2V0VHJhY2tpbmcgKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUge2Jvb2xlYW59ICovICh0aGlzLmdldChQcm9wZXJ0eS5UUkFDS0lORykpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHRyYWNraW5nIG9wdGlvbnMuXG4gICAqIFNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9nZW9sb2NhdGlvbi1BUEkvI3Bvc2l0aW9uLW9wdGlvbnMuXG4gICAqIEByZXR1cm4ge1Bvc2l0aW9uT3B0aW9uc3x1bmRlZmluZWR9IFBvc2l0aW9uT3B0aW9ucyBhcyBkZWZpbmVkIGJ5XG4gICAqICAgICB0aGUgW0hUTUw1IEdlb2xvY2F0aW9uIHNwZWNcbiAgICogICAgIF0oaHR0cDovL3d3dy53My5vcmcvVFIvZ2VvbG9jYXRpb24tQVBJLyNwb3NpdGlvbl9vcHRpb25zX2ludGVyZmFjZSkuXG4gICAqIEBvYnNlcnZhYmxlXG4gICAqIEBhcGlcbiAgICovXG4gIEdlb2xvY2F0aW9uLnByb3RvdHlwZS5nZXRUcmFja2luZ09wdGlvbnMgPSBmdW5jdGlvbiBnZXRUcmFja2luZ09wdGlvbnMgKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUge1Bvc2l0aW9uT3B0aW9uc3x1bmRlZmluZWR9ICovICh0aGlzLmdldChQcm9wZXJ0eS5UUkFDS0lOR19PUFRJT05TKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgcHJvamVjdGlvbiB0byB1c2UgZm9yIHRyYW5zZm9ybWluZyB0aGUgY29vcmRpbmF0ZXMuXG4gICAqIEBwYXJhbSB7aW1wb3J0KFwiLi9wcm9qLmpzXCIpLlByb2plY3Rpb25MaWtlfSBwcm9qZWN0aW9uIFRoZSBwcm9qZWN0aW9uIHRoZSBwb3NpdGlvbiBpc1xuICAgKiAgICAgcmVwb3J0ZWQgaW4uXG4gICAqIEBvYnNlcnZhYmxlXG4gICAqIEBhcGlcbiAgICovXG4gIEdlb2xvY2F0aW9uLnByb3RvdHlwZS5zZXRQcm9qZWN0aW9uID0gZnVuY3Rpb24gc2V0UHJvamVjdGlvbiAocHJvamVjdGlvbikge1xuICAgIHRoaXMuc2V0KFByb3BlcnR5LlBST0pFQ1RJT04sIGdldFByb2plY3Rpb24ocHJvamVjdGlvbikpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSB0cmFja2luZy5cbiAgICogQHBhcmFtIHtib29sZWFufSB0cmFja2luZyBFbmFibGUgdHJhY2tpbmcuXG4gICAqIEBvYnNlcnZhYmxlXG4gICAqIEBhcGlcbiAgICovXG4gIEdlb2xvY2F0aW9uLnByb3RvdHlwZS5zZXRUcmFja2luZyA9IGZ1bmN0aW9uIHNldFRyYWNraW5nICh0cmFja2luZykge1xuICAgIHRoaXMuc2V0KFByb3BlcnR5LlRSQUNLSU5HLCB0cmFja2luZyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgdHJhY2tpbmcgb3B0aW9ucy5cbiAgICogU2VlIGh0dHA6Ly93d3cudzMub3JnL1RSL2dlb2xvY2F0aW9uLUFQSS8jcG9zaXRpb24tb3B0aW9ucy5cbiAgICogQHBhcmFtIHtQb3NpdGlvbk9wdGlvbnN9IG9wdGlvbnMgUG9zaXRpb25PcHRpb25zIGFzIGRlZmluZWQgYnkgdGhlXG4gICAqICAgICBbSFRNTDUgR2VvbG9jYXRpb24gc3BlY1xuICAgKiAgICAgXShodHRwOi8vd3d3LnczLm9yZy9UUi9nZW9sb2NhdGlvbi1BUEkvI3Bvc2l0aW9uX29wdGlvbnNfaW50ZXJmYWNlKS5cbiAgICogQG9ic2VydmFibGVcbiAgICogQGFwaVxuICAgKi9cbiAgR2VvbG9jYXRpb24ucHJvdG90eXBlLnNldFRyYWNraW5nT3B0aW9ucyA9IGZ1bmN0aW9uIHNldFRyYWNraW5nT3B0aW9ucyAob3B0aW9ucykge1xuICAgIHRoaXMuc2V0KFByb3BlcnR5LlRSQUNLSU5HX09QVElPTlMsIG9wdGlvbnMpO1xuICB9O1xuXG4gIHJldHVybiBHZW9sb2NhdGlvbjtcbn0oQmFzZU9iamVjdCkpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IEdlb2xvY2F0aW9uO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1HZW9sb2NhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBtb2R1bGUgb2wvaGFzXG4gKi9cblxudmFyIHVhID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgP1xuICBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkgOiAnJztcblxuLyoqXG4gKiBVc2VyIGFnZW50IHN0cmluZyBzYXlzIHdlIGFyZSBkZWFsaW5nIHdpdGggRmlyZWZveCBhcyBicm93c2VyLlxuICogQHR5cGUge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCB2YXIgRklSRUZPWCA9IHVhLmluZGV4T2YoJ2ZpcmVmb3gnKSAhPT0gLTE7XG5cbi8qKlxuICogVXNlciBhZ2VudCBzdHJpbmcgc2F5cyB3ZSBhcmUgZGVhbGluZyB3aXRoIFNhZmFyaSBhcyBicm93c2VyLlxuICogQHR5cGUge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCB2YXIgU0FGQVJJID0gdWEuaW5kZXhPZignc2FmYXJpJykgIT09IC0xICYmIHVhLmluZGV4T2YoJ2Nocm9tJykgPT0gLTE7XG5cbi8qKlxuICogVXNlciBhZ2VudCBzdHJpbmcgc2F5cyB3ZSBhcmUgZGVhbGluZyB3aXRoIGEgV2ViS2l0IGVuZ2luZS5cbiAqIEB0eXBlIHtib29sZWFufVxuICovXG5leHBvcnQgdmFyIFdFQktJVCA9IHVhLmluZGV4T2YoJ3dlYmtpdCcpICE9PSAtMSAmJiB1YS5pbmRleE9mKCdlZGdlJykgPT0gLTE7XG5cbi8qKlxuICogVXNlciBhZ2VudCBzdHJpbmcgc2F5cyB3ZSBhcmUgZGVhbGluZyB3aXRoIGEgTWFjIGFzIHBsYXRmb3JtLlxuICogQHR5cGUge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCB2YXIgTUFDID0gdWEuaW5kZXhPZignbWFjaW50b3NoJykgIT09IC0xO1xuXG5cbi8qKlxuICogVGhlIHJhdGlvIGJldHdlZW4gcGh5c2ljYWwgcGl4ZWxzIGFuZCBkZXZpY2UtaW5kZXBlbmRlbnQgcGl4ZWxzXG4gKiAoZGlwcykgb24gdGhlIGRldmljZSAoYHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvYCkuXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAYXBpXG4gKi9cbmV4cG9ydCB2YXIgREVWSUNFX1BJWEVMX1JBVElPID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcblxuXG4vKipcbiAqIFRydWUgaWYgdGhlIGJyb3dzZXIncyBDYW52YXMgaW1wbGVtZW50YXRpb24gaW1wbGVtZW50cyB7Z2V0LHNldH1MaW5lRGFzaC5cbiAqIEB0eXBlIHtib29sZWFufVxuICovXG5leHBvcnQgdmFyIENBTlZBU19MSU5FX0RBU0ggPSBmdW5jdGlvbigpIHtcbiAgdmFyIGhhcyA9IGZhbHNlO1xuICB0cnkge1xuICAgIGhhcyA9ICEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKS5zZXRMaW5lRGFzaDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIHBhc3NcbiAgfVxuICByZXR1cm4gaGFzO1xufSgpO1xuXG5cbi8qKlxuICogSXMgSFRNTDUgZ2VvbG9jYXRpb24gc3VwcG9ydGVkIGluIHRoZSBjdXJyZW50IGJyb3dzZXI/XG4gKiBAY29uc3RcbiAqIEB0eXBlIHtib29sZWFufVxuICogQGFwaVxuICovXG5leHBvcnQgdmFyIEdFT0xPQ0FUSU9OID0gJ2dlb2xvY2F0aW9uJyBpbiBuYXZpZ2F0b3I7XG5cblxuLyoqXG4gKiBUcnVlIGlmIGJyb3dzZXIgc3VwcG9ydHMgdG91Y2ggZXZlbnRzLlxuICogQGNvbnN0XG4gKiBAdHlwZSB7Ym9vbGVhbn1cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IHZhciBUT1VDSCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdztcblxuXG4vKipcbiAqIFRydWUgaWYgYnJvd3NlciBzdXBwb3J0cyBwb2ludGVyIGV2ZW50cy5cbiAqIEBjb25zdFxuICogQHR5cGUge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCB2YXIgUE9JTlRFUiA9ICdQb2ludGVyRXZlbnQnIGluIHdpbmRvdztcblxuXG4vKipcbiAqIFRydWUgaWYgYnJvd3NlciBzdXBwb3J0cyBtcyBwb2ludGVyIGV2ZW50cyAoSUUgMTApLlxuICogQGNvbnN0XG4gKiBAdHlwZSB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IHZhciBNU1BPSU5URVIgPSAhIShuYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCk7XG5cblxuZXhwb3J0IHtIQVMgYXMgV0VCR0x9IGZyb20gJy4vd2ViZ2wuanMnO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1oYXMuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==