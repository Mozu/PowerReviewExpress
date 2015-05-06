define(['modules/jquery-mozu', 'hyprlive',"modules/backbone-mozu",  "modules/models-product", "modules/api"],
    function ($, Hypr, Backbone, ProductModels, Api) {

        var merchantGroupId;
        var merchantId;
        var siteId;
        var locale;
        var prScript;
        function writeProductListBoxes() {
             prScript = "//cdn.powerreviews.com/repos/"+merchantGroupId+"/pr/pwr/engine/js/full.js";
             $.getScript(prScript).done(function( script, textStatus ) {
                    $('<script>')
                                    .attr('type', 'text/javascript')
                                    .text( 'var pr_locale=\"'+locale+'\";var pr_style_sheet=\"/stylesheets/widgets/pr_category_override.css\"')
                                    .appendTo('head');
                    var allInlineRatings = $('.pr-inline-rating');
                    allInlineRatings.each(function() {
                        var $this = $(this);
                        var productCode = $this.data('mzProductCode');
                        var productUrl= $this.data('mzProductUrl');
                        POWERREVIEWS.display.snippet({ write : function(content) {
                                                    $('#PRInlineRating-'+productCode).append(content); } },
                                                    { pr_page_id : productCode,
                                                      pr_read_review : productUrl+'#reviewDisplayProduct',
                                                      pr_snippet_min_reviews : 1,
                                                      pr_write_review : '/write-a-review?pageId='+productCode+'&merchantGroupId='+merchantGroupId+'&merchantId='+merchantId+'&siteId='+siteId+'&locale='+locale});
                    });
             });
        }
        $(document).ready(function () {
            var isWidget = $("#prProductDetail").val() == 1;
            var isReviewSnippet = $("#productReviewSnippet").val() == 1;
            var isReviewDisplay = $("#productReviewDisplay").val() == 1;
            
            merchantGroupId= Hypr.getThemeSetting('merchantGroupId');
            merchantId= Hypr.getThemeSetting('merchantId');
            siteId=Hypr.getThemeSetting('siteId');
            locale=Hypr.getThemeSetting('locale');
            
            prScript = "//cdn.powerreviews.com/repos/"+merchantGroupId+"/pr/pwr/engine/js/full.js";
            var prStyleSheet= "http://cdn.powerreviews.com/aux/"+merchantGroupId+"/"+merchantId+"/css/express.css";
           $.getScript(prScript).done(function( script, textStatus ) {
                var currentProduct = ProductModels.Product.fromCurrent();
                $('<script>')
                                .attr('type', 'text/javascript')
                                .text( 'var pr_style_sheet=\"'+prStyleSheet+'\"')
                                .appendTo('head');
				$('<script>')
                                .attr('type', 'text/javascript')
                                .text( 'var pr_locale=\"'+locale+'\";var pr_style_sheet=\"/stylesheets/widgets/pr_product_override.css\"')
                                .appendTo('head');
                if (isWidget) {
                        if(isReviewSnippet){
                               POWERREVIEWS.display.snippet({ write : function(content) {
                                    $("#reviewSnippetProduct").append(content); } },
                                    { pr_page_id : currentProduct.id,
                                      pr_read_review : '#ReviewHeader',
                                      pr_write_review : '/write-a-review?pageId='+currentProduct.id+'&merchantGroupId='+merchantGroupId+'&merchantId='+merchantId+'&siteId='+siteId+'&locale='+locale});
                        } 
                        if(isReviewDisplay){
                                POWERREVIEWS.display.engine({ write : function(content) {
                                    $("#reviewDisplayProduct").append(content); } },
                                    { pr_page_id : currentProduct.id,
                                      pr_write_review : '/write-a-review?pageId='+currentProduct.id+'&merchantGroupId='+merchantGroupId+'&merchantId='+merchantId+'&siteId='+siteId+'&locale='+locale});
                        }
                                
                }else{
                        writeProductListBoxes();
                }
                 })
                 .fail(function( jqxhr, settings, exception ) {
                   console.log(jqxhr);
               });
   
            });
       
	return {
		writeProductListBoxes: function() {
	        return writeProductListBoxes();
		}
	};
      
});






















