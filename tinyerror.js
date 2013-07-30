(function($, undefined){
    
    /*
     * tinyerror v.0.1 by BigglesZX
     * http://github.com/BigglesZX/tinyerror/
     */
    
    var TinyError = window.TinyError = function(displayEl, options) {
        this.displayEl = $(displayEl);
        if (options) $.extend(this.options, options);
    };
    
    TinyError.prototype.options = {
        errorEl: 'li',
        append: '',
        prepend: '',
        messageClasses: {
            error: 'error',
            warning: 'warning',
            success: 'success'
        }
    };
    
    TinyError.prototype.clear = function(errorType) {
        this.displayEl.find(this.options.errorEl + (errorType ? '[data-tinyerror-type=' + errorType + ']' : '')).each(function(i, elem) {
            $(elem).slideUp(function() {
                $(elem).remove();
            });
        });
    };
    
    TinyError.prototype.add = function(errorText, errorType, errorClass, supercede) {
        errorClass = errorClass || this.options.messageClasses.error;
        errorType = errorType || 'default';
        if (supercede) this.clear(errorType);        
        var newError = $('<' + this.options.errorEl + '/>').html(errorText)
                                                           .prepend(this.options.prepend)
                                                           .append(this.options.append)
                                                           .addClass(errorClass)
                                                           .attr('data-tinyerror-type', errorType)
                                                           .hide()
                                                           .appendTo(this.displayEl)
                                                           .slideDown();
    };
    
    TinyError.prototype.error = function(errorText, errorType, supercede) {
        this.add(errorText, errorType, this.options.messageClasses.error, supercede);
    };
    
    TinyError.prototype.warning = function(errorText, errorType, supercede) {
        this.add(errorText, errorType, this.options.messageClasses.warning, supercede);
    };
    
    TinyError.prototype.success = function(errorText, errorType, supercede) {
        this.add(errorText, errorType, this.options.messageClasses.success, supercede);
    };
    
})(jQuery);
