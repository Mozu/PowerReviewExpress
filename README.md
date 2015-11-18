# PowerReviews Express Widget

This repository contains files that implement a basic PowerReviews widget and a Write a Review page on your Mozu site. The widget allows you to display reviews from PowerReviews directly on product pages of your Mozu site.You can select whether to display a full review or a smaller review snippet. 

**Note:** This widget does not pass any data between Mozu and PowerReviews, and content from the reviews is not indexed for your site SEO. For a more complete PowerReviews integration, install the Mozu PowerReviews Enterprise Application from the [Mozu App Marketplace](https://www.mozu.com/ecommerce-app-center/).

This repository is structured to mirror the file structure of Mozu Core Theme, but only the necessary files for the widget are included. These files are based off Mozu Core 6. If your theme is built off a later version of the Mozu Core theme, take care when merging to ensure you do not overwrite updated theme code.

This widget adds the following files:
*	`resources/admin/widgets/power_review_icon.png`
*	`scripts/widgets/powerreviews.js`
*	`templates/modules/product/product-images.hypr.live`
*	`templates/modules/product/product-listing.hypr.live`
*	`templates/pages/resize.hypr`
*	`templates/pages/write-a-review.hypr`
*	`templates/widgets/PowerReviewsExpress/pr-product-reviews.hypr`
*	`thumb.tpt.png`

And updates the following files:
*	`scripts/modules/views-collections.js`
*	`stylesheets/pages/pr_product.css`
* `stylesheets/widgets/pr_category_override.css`
* `stylesheets/widgets/pr_product_override.css`
* `stylesheets/widgets/pr_write_review_override.css`
* `templates/pages/category.hypr`
* `theme.json`

**Note:** You must add your PowerReviews Merchant Group ID and Merchant ID under `settings` in `theme.json`.

##Update Your Theme

1.	Clone or download this repository.
2.	Add or merge the files listed above. Be sure to add your PowerReviews IDs to `theme.json`.
3.	Run Grunt to build the theme.
4.	Upload the resulting ZIP file to Mozu Dev Center.
5.	Install the updated theme to the sandbox you’re working in.
6.	In Mozu Admin, go to **SiteBuilder** > **Themes**, right-click the new theme, and click **Apply**.

##Add the Widget to Your Site

1.	In Mozu Admin, go to **SiteBuilder** > **Editor**.
2.	In the Site tree, navigate to **Templates** > **Product**.
3.	Click the **Widgets** button at the top of the editor and drag the **PR Express Product Reviews** widget to a dropzone where you want the reviews to appear. 
4.	In the configuration dialog that appears, specify the **Widget Type**. The **Review Snippet** is smaller and typically used for sidebars. The **Review Display** is larger and typically used at the bottom of the product page.

##Add a Write a Review Page
1.	In Mozu Admin, go to **SiteBuilder** > **Editor**.
2.	In the Site tree, navigate to **Single Pages** > **Add Page**.
3.	Enter Write a Review for the **Page Title**, accept the default **Page Url**, and select **Write a Review** from the template drop-down.
4.	Click **Save**.

