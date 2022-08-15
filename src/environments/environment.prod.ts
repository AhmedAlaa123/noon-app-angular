const BaseURl:string='https://localhost:5200/api/'
const ImagesURL:string=`${BaseURl}/images`
export const environment = {
  production: true,
  BaseUrl:BaseURl,
  SubCategoriesImagesURL:`${ImagesURL}/subCategoryImages/`,
  ProductsImagesURL:`${ImagesURL}/subCategoryImages/`,
  CompaniesImagesURL:`${ImagesURL}/subCategoryImages/`,
};

