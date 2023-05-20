// Api urls
export const api_Url_Base = "https://api.noroff.dev/api/v1/auction";
export const api_Register = `${api_Url_Base}/auth/register`;
export const api_Login = `${api_Url_Base}/auth/login`;
export const api_Listings = `${api_Url_Base}/listings`;
export const api_Listings_parameters = `?_active=true&sort=created&sortOrder=desc&_seller=true&_bids=true`;
export const api_Listings_sort_parameters = `?_active=true&sort=endsAt&sortOrder=asc&_seller=true&_bids=true`;
export const api_Profiles = `${api_Url_Base}/profiles`;

// Methods
export const methodPost = "post";
export const methodPut = "put";
export const methodDelete = "delete";
