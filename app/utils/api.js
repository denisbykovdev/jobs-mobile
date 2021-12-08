export const url = `https://api.sherutbekalut.co.il`;

export const api = `${url}/api`;

export const simpleTypes = `${api}/user/simpleTypes`;
// GET

// type simpleTypesResponse = [
//     {
//         icon: string,
//         icon_active: string,
//         id: number,
//         name: string
//     }
// ]

export const register = `${api}/register`;
// POST

// type registerRequest = {
//      phone: string(min 6/max 10),
//      role_id?: number,
//      is_hr: 0 | 1,
//  }
// type registerResponse = {
//     code: string | number
// }

export const verification = `${api}/user/verification`;
// POST

// type varificatoinRequest = {
//     code: string
// }
// type verificationResponse = {
//     token: string,
//     user: {
//         id: string | number,
//         is_midrashot: boolean,
//         is_before_school: boolean,
//         is_new: boolean
//     }
// }
// saga: call: providerResponse => SecureStore.seItemAsync('user')

export const provider = (providerName) => `${register}/${providerName}`;
// POST

// type providerRequest = {
//     user: {
//         email: string,
//         name: string,
//         id: string,
//         photoUrl: string as base64,
//     },
//     accessToken: string,
//     refreshToken: string,
//     idToken: string,
//     role_id: number,
//     is_hr: 0 | 1
// }
// type providerResponse = {
//     token: string,
//     user: {
//         id: string | number,
//         is_midrashot: boolean,
//         is_before_school: boolean,
//         is_new: boolean
//     }
// }
// saga: call: providerResponse => SecureStore.seItemAsync('user')

export const getQuiz = (pageNumber) => `${api}/quiz/get?page=${pageNumber}`;
// GET

// type getQuizRequest = {
//     pageNumber: number
// }
// type getQuizResponse = {
//     current_page: number,
//     last_page: number,
//     data: [
//         question: string,
//         answer: string
//     ]
// }

export const setQuiz = `${api}/quiz/set`;
// POST

// type setQuizRequest = {
//     user: number,
//     quiz: string,
//     answer: string
// }
// type setQuizResponse = {
//     sub_categories: [] as Array
// }

export const quizResult = (userId) => `${api}/quiz/get/result?user=${userId}`
// GET

// type quizResultRequest = {
//     userId: number
// }
// type quizResultResponse = {
//     sub_categories: [] as Array
// }

// module3jobs 
export const getJobs = (jobsPage, jobsByDateOrStars) => `${api}/jobs/${jobsPage}/${jobsByDateOrStars}`
// POST 

export const getFavoriteJob = (jobId) => `${api}/job/${jobId}/favorite`
// GET 

export const jobFilter = `${api}/jobs/filter/getData`
// GET 
// const Response = {
//     "years": [
//         {
//             "id": 1,
//             "name": "תשפ״א"
//         },
//         {
//             "id": 2,
//             "name": "תשפ״ב"
//         }
//     ],
//     "categories": [
//         {
//             "id": 118,
//             "name": "בת עמי בחינוך"
//         }
//     ],
//     "organizations": [
//         {
//             "id": 1,
//             "name": "שלומית"
//         },
//         {
//             "id": 2,
//             "name": "האגודה להתנדבות"
//         }
//     ],
//     "areas": [
//         {
//             "id": 1,
//             "name": "מרכז"
//         },
//         {
//             "id": 2,
//             "name": "שרון- שומרון"
//         }
//     ],
//     "nucleus": [
//         "כן",
//         "לא"
//     ],
//     "places": {
//         "home": "תקן בית",
//         "out": "תקן דירה",
//         "dormitory": "פנימיה"
//     }
// }

export const viewJob = (jobId) => `${api}/jobs/${jobId}`
// GET 
// const Response = {
//     "data": {
//         "id": 2,
//         "title": "א.ס.ף – ארגון סיוע לפליטים",
//         "category": {
//             "id": 91,
//             "name": "קהילה"
//         },
//         "cover_image": false,
//         "logo": "/storage/organizations/logos/1604066982.png",
//         "category_name": "קהילה",
//         "subcategory_name": "עמותות חברתיות",
//         "area_name": "",
//         "city_name": "תל אביב",
//         "where_we_live": [],
//         "organization_name": "שלומית",
//         "nucleus": "לא",
//         "how_to_sort": "סיירות רגילות",
//         "hr_name": "ספיר עזרא",
//         "hr_phone": "0508289310",
//         "hr_email": null,
//         "images": [],
//         "video_url": false,
//         "stars": 5,
//         "count_of_all_positions": 0,
//         "count_of_taken_positions": 0,
//         "last_date_for_registration": null
//     }
// }

export const applyJob = (jobId) => `${api}/jobs/${jobId}/apply`
// POST 

// module6HR
export const getHrAccount = `${api}/account`
// GET 
// type getHrRequest = {
//     token: string
// }
// type getHrResponse = {
//     id: string,
//     first_name: string,
//     last_name: string,
//     phone: string,
//     organization_name: string,
//     areas: [
//         {
//             "id": number,
//             "name": string,
//             "created_at": string,
//             "updated_at": string,
//             "deleted_at": null | string
//         }
//     ],
//     email: string,
//     about: string,
//     avatar: string
// }

export const storeHrAccount = `${api}/account/store`
// POST 
// type updateHrAccountRequest = {
//     token: string,
//     id: string,
//     first_name: string,
//     last_name: string,
//     phone: string,
//     organization_name: string,
//     areas: [
//         {
//             "id": number,
//             "name": string,
//             "created_at": string,
//             "updated_at": string,
//             "deleted_at": null | string
//         }
//     ],
//     email: string,
//     about: string,
//     avatar: string
// }
// type updateHrAccountResponse = {
//     id: string,
//     first_name: string,
//     last_name: string,
//     phone: string,
//     organization_name: string,
//     areas: [
//         {
//             "id": number,
//             "name": string,
//             "created_at": string,
//             "updated_at": string,
//             "deleted_at": null | string
//         }
//     ],
//     email: string,
//     about: string,
//     avatar: string
// }

// module 8 (opportunities)

export const getListOpportunities = (jobsPage) => `${api}/jobs/${jobsPage}/stars`
// POST 
// type getListRequest = {
//      token: string,
//      jobsPage: string 
// }
// type getListResponse = {
//     "data": [
//         {
//             "id": number,
//             "title": string,
//             "organization": string,
//             "organization_id": number,
//             "stars": number,
//             "is_favorite": boolean,
//             "count_of_all_positions": number,
//             "count_of_taken_positions": number,
//             "status": number,
//             "statuses": string[],
//             "views": number,
//             "apply_count": number
//         }
//     ]
// }

export const updateJobStatus = (jobId, statusId) => `${api}/job/${jobId}/status/${statusId}`
// POST 
// type updateJobStatusRequest = {
//      token: string,
//      jobId: number,
//      statusId: number
// }
// type updateJobStatusResponse = {
//     "data": [
//         {
//             "id": number,
//             "title": string,
//             "organization": string,
//             "organization_id": number,
//             "stars": number,
//             "is_favorite": boolean,
//             "count_of_all_positions": number,
//             "count_of_taken_positions": number,
//             "status": number,
//             "statuses": string[],
//             "views": number,
//             "apply_count": number
//         }
//     ]
// }

export const getContenders = (jobId) => `${api}/job/${jobId}/contenders`
// GET
// type getContendersRequest = {
//      token: string,
//      jobId: number 
// }
// type getContendersResponse = {
// "data": [
//     {
//         "id": 5,
//         "name": null,
//         "date": "2020-11-07T13:39:11.000000Z",
//         "status": "העברה לרשימת המתנה",
//         "city": "אין רישום",
//         "phone": "+374915572491"
//     },
//     {
//         "id": 4,
//         "name": null,
//         "date": "2020-11-07T13:38:54.000000Z",
//         "status": "התקבלה",
//         "city": "אין רישום",
//         "phone": "+06095989798"
//     },
//     {
//         "id": 3,
//         "name": "asdasda",
//         "date": "2020-11-06T14:34:44.000000Z",
//         "status": "העברה לרשימת המתנה",
//         "city": "אין רישום",
//         "phone": "+285456"
//     }
// ]
// }

export const getOpportunityPage = (jobId) => `${api}/job/${jobId}/opportunity`
// GET 
// type getOpportunityPageRequest = {
//      token: string,
//      jobId: number 
// }
// type getOpportunityPageResponse = {
//     "data": {
//         "statuses": [
//             "סגור להרשמה",
//             "פתוח להרשמה"
//         ],
//         "date": "2020-09-09T08:05:03.000000Z",
//         "count_of_all_positions": 10,
//         "count_of_taken_positions": 1
//     }
// }

export const getOpportunityView = (jobId) => `${api}/opportunity/${jobId}`
// GET
// type getOpportunityViewRequest = {
//      token: string,
//      jobId: number 
// }
// type getOpportunityViewResponse = {
//     "data": {
//         "id": 9990,
//         "is_midrasha": true,
//         "title": "Midrasha title 1",
//         "logo": "",
//         "organization_name": "",
//         "statuses": [
//             "סגור להרשמה",
//             "פתוח להרשמה"
//         ],
//         "status": 1,
//         "type": "מדרשה",
//         "category_id": "",
//         "subcategory_id": "",
//         "name": "Midrasha title 1",
//         "description": "test description",
//         "video_url": null,
//         "area": "מרכז",
//         "city": "תל אביב לא להשתמש",
//         "place": "במדרשה",
//         "count": 15,
//         "nucleus": null,
//         "how_to_sort": null,
//         "other_hr_name": "other name",
//         "phone": "+972587412580",
//         "email": null,
//         "other_hr_phone": "+3745633221",
//         "is_edit": true
//     }
// }

export const getOpportunityTypeData = `${api}/opportunity/type/data`
// GET
// type getOpportunityTypeDataRequest = {
//     token: string
// }
// type getOpportunityTypeDataResponse = {
//     "data": [
//         {
//             "id": 1,
//             "name": "מדרשה",
//             "role_id": 3,
//             "created_at": "2020-09-09T07:15:46.000000Z",
//             "updated_at": "2020-09-09T07:15:46.000000Z"
//         },
//         {
//             "id": 2,
//             "name": "שירות לאומי",
//             "role_id": 4,
//             "created_at": "2020-09-09T07:15:46.000000Z",
//             "updated_at": "2020-09-09T07:15:46.000000Z"
//         }
//     ]
// }

// export const getDataForOpportunity = `${api}/opportunity/2/open/getData`
// // GET 
// // type Request = {
// //     token: string
// // }
// // type Response = {
// //     "categories": [
// //         {
// //             "id": 3,
// //             "name": "חינוך",
// //             "video_url": null,
// //             "is_main": 0,
// //             "icon": "",
// //             "job_type_id": null,
// //             "created_at": "2020-09-09T07:20:36.000000Z",
// //             "updated_at": "2020-09-09T07:20:36.000000Z"
// //         }
// //     ]
// // }

export const createOpportunity = `${api}/opportunity/2/store`
// POST 
// type Request = {
//     token: string
//     title: jobName,
//     category_id: checkedCategory,
//     subcategory_id: checkedSubCategory,
//     organization_id: checkedOrganizations,
//     route_id: [13, 14, 15],
//     job_for: 'מיועד לבנים בלבד',
//     description: about,
//     area_id: checkedAreas,
//     city_id: checkedCity,
//     address: address,
//     place: 'home',
//     nucleus: 'כן',
//     count: Number(count),
//     how_to_sort: 'מיונים מוקדמים',
//     images: '',
//     video_url: '',
//     last_date_for_registration: year + '-' + month + '-' + day,
//     other_hr_name: hrName,
//     other_hr_phone: hrPhone,
// }
// type Response = {
//     message: ''
// }

export const createOpportunityMidrasha = `${api}/opportunity/1/store`
// POST 
// type Request = {
//     token: string
//     title: 'test job',
//     category_id: 3,
//     subcategory_id: 4,
//     organization_id: 6,
//     route_id: [13, 14, 15],
//     job_for: 'מיועד לבנים בלבד',
//     description: 'This test job do not have any description',
//     area_id: 1,
//     city_id: 1,
//     address: 'do not have address',
//     place: 'home',
//     nucleus: 'כן',
//     count: 15,
//     how_to_sort: 'מיונים מוקדמים',
//     images: '',
//     video_url: '',
//     last_date_for_registration: '2021-01-15',
//     other_hr_name: 'test',
//     other_hr_phone: '+3745633221',
// }
// type Response = {
//     message: ''
// }

export const getExistingOpportunity = (jobId) => `${api}/opportunity/${jobId}/get`
// GET 
// type Request = {
//      token: string,
//      jobId: number 
// }
// type Response = {
//     "data": {
//         "id": 9989,
//         "title": "Midrasha title",
//         "area_id": 1,
//         "city_id": 1,
//         "address": "",
//         "program": "1",
//         "place": "home",
//         "route": "test",
//         "target_audience": "דתיות מבית",
//         "main_areas_of_study": null,
//         "description": "test description",
//         "images": [],
//         "video_url": null,
//         "count": 15,
//         "other_hr_name": "other name",
//         "other_hr_phone": "+3745633221"
//     }
// }

export const updateOpportunity = (jobId) => `${api}/opportunity/${jobId}/update`
// POST 
// type Request = {
//     token: string
//     title: 'test job',
//     category_id: 3,
//     subcategory_id: 4,
//     organization_id: 6,
//     route_id: [13, 14, 15],
//     job_for: 'מיועד לבנים בלבד',
//     description: 'This test job do not have any description',
//     area_id: 1,
//     city_id: 1,
//     address: 'do not have address',
//     place: 'home',
//     nucleus: 'כן',
//     count: 15,
//     how_to_sort: 'מיונים מוקדמים',
//     images: '',
//     video_url: '',
//     last_date_for_registration: '2021-01-15',
//     other_hr_name: 'test',
//     other_hr_phone: '+3745633221',
// }
// type Response = {
//     message: ''
// }

export const getOpportunityChosenContenders = (jobId) => `${api}/opportunity/${jobId}/chosen/contenders`
// GET
// type Request = {
//      token: string,
//      jobId: number 
// }
// type Response = {
//     "data": [
//         {
//             "id": 4,
//             "name": null,
//             "date": "2020-11-07T13:38:54.000000Z",
//             "status": "העברה לרשימת המתנה",
//             "city": "אין רישום",
//             "about": null
//         }
//     ]
// }

export const showOpportunityContenderProfile = (jobId, contenderId) => `${api}/opportunity/${jobId}/contenders/${contenderId}`
// GET
// type Request = {
//      token: string,
//      jobId: number,
//      contenderId: number 
// }
// type Response = {
//     "data": {
//         "id": 4,
//         "name": null,
//         "avatar": "",
//         "date": "2020-11-07T13:38:54.000000Z",
//         "job_id": 9990,
//         "job_name": "Midrasha title 1",
//         "phone": "+06095989798",
//         "city": "אין רישום",
//         "birthdate": null,
//         "email": null,
//         "status": 0,
//         "statuses": [
//             "העברה לרשימת המתנה",
//             "התקבלה",
//             "העברה לרשימת המתנה"
//         ]
//     }
// }

export const updateOpportunityContenderStatus = (jobId, contenderId, contenderStatus) => `${api}/opportunity/${jobId}/contenders/${contenderId}/update/${contenderStatus}`
// POST

//module5 - profile
export const getListOfRequests = `${api}/profile/requests/list`
// GET 
// const Request = {
//     token: String
// }
// const Response = {
//     "data": [
//         {
//             "id": 3,
//             "title": "Midrasha title 1",
//             "organization_name": "",
//             "logo": "",
//             "status": 0,
//             "status_text": "העברה לרשימת המתנה",
//             "send_again": true
//         },
//         {
//             "id": 8,
//             "title": "מדרשת הרובע",
//             "organization_name": "עמינדב",
//             "logo": "",
//             "status": 1,
//             "status_text": "התקבלה",
//             "send_again": false
//         },
//         {
//             "id": 9,
//             "title": "שירת דבורה נצרת עילית",
//             "organization_name": "עמינדב",
//             "logo": "",
//             "status": 2,
//             "status_text": "העברה לרשימת המתנה",
//             "send_again": false
//         }
//     ]
// }

export const getFavoriteJobs = `${api}/profile/favorite/list`
// GET 
// const Request = {
//     token: String
// }
// const Response = {
//     data: [
//         {},
//         {}
//     ]
// }

export const getInfoForProfile = `${api}/profile/getInfo`
// GET 
// const Request = {
//     token: String
// }
// const Response = {
//     "schools": [
//         {
//             "id": 1,
//             "name": "test12"
//         }
//     ],
//     "types": [
//         {
//             "id": 3,
//             "name": "רוצה למצוא\nשירות לאומי",
//             "icon": "http://jobs.test/storage/users/icons/icon-2.jpg",
//             "icon_active": "http://jobs.test/storage/users/icons/icon-2-active.jpg"
//         },
//         {
//             "id": 4,
//             "name": "רוצה מדרשה",
//             "icon": "http://jobs.test/storage/users/icons/icon-3.jpg",
//             "icon_active": "http://jobs.test/storage/users/icons/icon-3-active.jpg"
//         },
//         {
//             "id": 5,
//             "name": "סיימתי שירות",
//             "icon": "http://jobs.test/storage/users/icons/icon-1.jpg",
//             "icon_active": "http://jobs.test/storage/users/icons/icon-1-active.jpg"
//         },
//         {
//             "id": 6,
//             "name": "באמצע שירות",
//             "icon": "http://jobs.test/storage/users/icons/icon-4.jpg",
//             "icon_active": "http://jobs.test/storage/users/icons/icon-4-active.jpg"
//         }
//     ],
//     "dateTypes": [
//         {
//             "name": "תאריך לידה לועזי",
//             "is_regular": true
//         },
//         {
//             "name": "תאריך לידה עברי",
//             "is_regular": false
//         }
//     ],
//     "cities": [
//         {
//             "id": 1,
//             "name": "תל אביב לא להשתמש"
//         },
//         {
//             "id": 2,
//             "name": "פרדס חנה"
//         }
//     ]
// }

export const createNewSchool = `${api}/profile/school/store`
// POST 
// const Request = {
//     token: String,
//     name: String,
//     email: String,
//     type_id: Number
// }
// const Response = {
//     "name": [
//         "The name has already been taken."
//     ]
// }
//!!!response name corrected to standart message:''

export const storeAdditionalInfo = `${api}/profile/additionalInfo/store`
// POST 
// const Request = {
//     token: String,
//     email: String,
//     school_id: Number,
//     type_id: Number
// }
// const Response = {
//     "name": [
//         "The name has already been taken."
//     ]
// }
//!!!response name corrected to standart message:''

export const storeBirthdayInfo = `${api}/profile/birthday/store`
// POST 
// const Request = {
//     token: String,
//     is_regular: Number,
//     day: Number,
//     month: Number,
//     year: Number
// }
// const Response = {
//     "data": {
//         "id": 500,
//         "first_name": "",
//         "last_name": "",
//         "email": "myemail1@example.com",
//         "phone": "+972123654780",
//         "birthdate_array": {
//             "year": "1994",
//             "month": "06",
//             "day": "22"
//         },
//         "birthdate": "1994-06-22",
//         "organization_id": null,
//         "role_id": {
//             "id": 5,
//             "name": "סיימתי שירות",
//             "icon": "http://jobs.test/storage/users/icons/icon-1.jpg",
//             "icon_active": "http://jobs.test/storage/users/icons/icon-1-active.jpg"
//         },
//         "provider": null,
//         "avatar": null,
//         "quiz": [],
//         "is_before_school": false,
//         "is_midrashot": false,
//         "is_hr": true,
//         "created_at": "2020-11-07T13:16",
//         "updated_at": "2020-11-16T14:00"
//     }
// }

export const createNewCity = `${api}/profile/city/store`
// POST 
// const Request = {
//     token: String,
//     first_name: String,
//     last_name: String,
//     name: String
// }
// const Response = {
//     "name": [
//         "The name has already been taken."
//     ]
// }
//!!!response name corrected to standart message:''

export const storeDetails = `${api}/profile/details/store`
// POST 
// const Request = {
//     token: String,
//     first_name: String,
//     last_name: String,
//     city_id: Number
// }
// const Response = {
//     "data": {
//         "id": 500,
//         "first_name": "Mush",
//         "last_name": "Harutyunyan",
//         "email": "myemail1@example.com",
//         "phone": "+972123654780",
//         "birthdate_array": {
//             "year": "1994",
//             "month": "06",
//             "day": "22"
//         },
//         "birthdate": "1994-06-22",
//         "organization_id": null,
//         "city": "כללי",
//         "role_id": {
//             "id": 5,
//             "name": "סיימתי שירות",
//             "icon": "http://jobs.test/storage/users/icons/icon-1.jpg",
//             "icon_active": "http://jobs.test/storage/users/icons/icon-1-active.jpg"
//         },
//         "provider": null,
//         "avatar": null,
//         "quiz": [],
//         "is_before_school": false,
//         "is_midrashot": false,
//         "is_hr": true,
//         "created_at": "2020-11-07T13:16",
//         "updated_at": "2020-11-17T09:50"
//     }
// }

// module 9 - categories 
export const getSubcategoryByCategory = (category_id) => `${api}/libraries/category/${category_id}`
// GET 
// const Request = {
//     token: String,
//     category_id: Number 
// }
// const Response = [
//     {
//         "id": 4,
//         "category_id": 3,
//         "name": "גנים/מעונות",
//         "images": [],
//         "video_url": null
//     },
//     {
//         "id": 7,
//         "category_id": 3,
//         "name": "חטיבת ביניים/תיכון",
//         "images": [],
//         "video_url": null
//     },
//     {
//         "id": 8,
//         "category_id": 3,
//         "name": "בית ספר יסודי",
//         "images": [],
//         "video_url": null
//     }
// ]

export const getDurationByYear = (year) => `${api}/libraries/duration/${year}`
// GET
// const Request = {
//     token: String,
//     year: Number 
// } 
// const Response = {
//     "1": "שנה אחת",
//     "2": "שנתיים",
//     "3": "שלוש שנים"
// }

export const getMainCategories = `${api}/libraries/categories`
// GET 
// const Request = {
//     token: String
// }
// const Response = {
//     "data": [
//         {
//             "id": 3,
//             "name": "חינוך",
//             "icon": "/storage/categories/icons/28_CATEGORY1.png"
//         },
//         {
//             "id": 9,
//             "name": "הדרכה",
//             "icon": "/storage/categories/icons/28_CATEGORY5.png"
//         }
//     ]
// }

export const getCategory = (category_id) => `${api}/libraries/categories/${category_id}`
// GET 
// const Request = {
//     toekn: String,
//     category_id: Number
// }
// const Response = {
//     "data": {
//         "id": 182,
//         "name": "חקלאות",
//         "subcategories": [
//             {
//                 "id": 615,
//                 "name": "כללי"
//             }
//         ],
//         "images": [
//             "/storage/categories/1605026275.png",
//             "/storage/categories/1605026275.png"
//         ],
//         "video_url": "https://www.youtube.com/watch?v=OdaIbTUGmHM&feature=youtu.be"
//     }
// }

export const getCityByArea = (area_id) => `${api}/libraries/cities/${area_id}`
// GET 
// const Request = {
//     token: String,
//     area_id: Number 
// }
// const Response = [
//     {
//         "id": 1,
//         "name": "תל אביב לא להשתמש"
//     },
//     {
//         "id": 5,
//         "name": "בית דגן"
//     }
// ]

export const getSubcategory = (category_id) => `${api}/libraries/subcategories/${category_id}`
// GET 
// const Request = {
//     token: String,
//     category_id: Number
// }
// const Response = {
//     data: [
//         {
//             "id": 615,
//             "name": "כללי"
//         }
//     ],
// }

export const getAreas = `${api}/libraries/areas`
// GET 
// const Request = {
//     token: String
// }
// const Response = {
//     data: [
//         {}
//     ]
// }

// module 7 - faq & contacts
export const getAllFaq = (job_id, item) => `${api}/jobs/${job_id}/faq/?search=${item}`
// GET 
// const Request = {
//      token: String,
//      job_id: Number,
//      item: String 
// }
// const Response = {
//     "data": [
//         {
//             "id": 2,
//             "question": "Vvvg",
//             "answers_count": 2,
//             "created_at": "2020-11-06T13:20:03.000000Z",
//             "job": {
//                 "id": 2,
//                 "title": "א.ס.ף – ארגון סיוע לפליטים"
//             },
//             "user": {
//                 "id": 445,
//                 "first_name": "",
//                 "last_name": "",
//                 "phone": "+285456",
//                 "organization_id": null,
//                 "role_id": {
//                     "id": 5,
//                     "name": "סיימתי שירות",
//                     "icon": "http://jobs.test/storage/users/icons/icon-1.jpg",
//                     "icon_active": "http://jobs.test/storage/users/icons/icon-1-active.jpg"
//                 },
//                 "provider": null,
//                 "avatar": null,
//                 "quiz": [],
//                 "is_before_school": false,
//                 "is_midrashot": false,
//                 "created_at": "2020-11-02T20:05",
//                 "updated_at": "2020-11-02T20:05"
//             },
//             "hr": null,
//             "answers": [
//                 {
//                     "id": 1,
//                     "answer": "test testetest testetest testetest testetest testetest testetest teste",
//                     "is_hr": 1,
//                     "created_at": "2020-11-10T17:37:41.691323Z"
//                 },
//                 {
//                     "id": 2,
//                     "answer": "test testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest teste",
//                     "is_hr": 1,
//                     "created_at": "2020-11-10T17:37:41.691468Z"
//                 }
//             ]
//         }
//     ]
// }

export const addQuestion = (job_id) => `${api}/jobs/${job_id}/faq/store`
// POST 
// const Request = {
//     token: String,
//     job_id: Number,
//     question: String 
// }
// const Response = {
//     message: ''
// }

export const firstAnswer = (job_id, question_id) => `${api}/jobs/${job_id}/faq/${question_id}/answer`
// POST 
// const Request = {
//     token: String,
//     job_id: Number,
//     question_id: Number,
//     answer: String 
// }
// const Response = {
//     message: ''
// }

export const answerBack = (job_id, question_id) => `${api}/jobs/${job_id}/faq/${question_id}/answer/back`
// POST 
// const Request = {
//     token: String,
//     job_id: Number,
//     question_id: Number,
//     answer: String
// }
// const Response = {
//     message: ''
// }

// contactus 
export const sendForm = `${api}/contactus`
// POST
// const Request = {
//     token: String,
//     title: String,
//     phone: String,
//     email: String,
//     description: String
// }
// const Response = {
//     message: ''
// }

// module 10 - blogs 
export const getBlogsAll = `${api}/blogs`

export const getBlogs = (category_id, searchString) => `${api}/blogs/?${category_id}=1&search=${searchString}`
// GET 
// const Request = {
//     category_id: Number,
//     searchString: String,
//     token: String
// }
// const Request = {
//     "data": [
//         {
//             "id": 1,
//             "title": "asdasda",
//             "category": "ביטחון וממשלתי, שב\"ס",
//             "date": "2021-01-19",
//             "description": "<p>asdasdasdasda</p>"
//         },
//         {
//             "id": 2,
//             "title": "asdasd",
//             "category": "הדרכה, חינוך בלתי פורמלי",
//             "date": "2021-01-19",
//             "description": "<p>asdasdasd</p>"
//         }
//     ]
// }
export const getPost = (post_id) => `${api}/posts/${post_id}`
// GET 
// const request = {
//     post_id: Number,
//     token: String 
// }
// const Response = {
//     "data": {
//         "id": 3,
//         "title": "asdfasdf",
//         "category": "הדרכה, אומנויות",
//         "date": "2021-01-19",
//         "description": "<p>asdfasdfasdfasdf</p>",
//         "video_url": "https://www.youtube.com/watch?v=qX_MnB3auaE",
//         "image": "/storage/blogs/1611070307.png"
//     }
// }
export const likeUnlikePost = (post_id) => `${api}/posts/${post_id}/favorite`
// GET
// const Request = {
//     post_id: Number,
//     token: String 
// }
// const Response = {
//     msessage: ''
// }

// module 11 - reviews
export const getReviews = (job_id) => `${api}/jobs/${job_id}/reviews`
// GET 
// const Request = {
//     job_id: Number,
//     token: String
// }
// const Response = {
//     "title": "2B friendly",
//     "cover_image": false,
//     "logo": "/storage/organizations/logos/1604066982.png",
//     "stars": 5,
//     "count": 12,
//     "data": [
//         {
//             "name": "fdgdfgfd",
//             "avatar": "/users/avatars/",
//             "created_at": "2020-10-29T09:27:45.000000Z",
//             "stars": 5,
//             "description": "sdfsaa\n"
//         },
//         {
//             "name": "rete",
//             "avatar": "/users/avatars/",
//             "created_at": "2020-10-29T09:29:58.000000Z",
//             "stars": 5,
//             "description": "fwerewrew\n"
//         }
//     ]
// }
export const getReviewsData = (job_id) => `${api}/jobs/${job_id}/reviews/getData`
// GET 
// const Request = {
//     job_id: Number,
//     token: String 
// } 
// const Response = {
//     "user_info": {
//         "id": 360,
//         "name": null,
//         "phone": "435345345",
//         "organization_id": null,
//         "role_id": {
//             "id": 5,
//             "name": "סיימתי שירות",
//             "icon": "http://jobs.test/storage/users/icons/icon-1.jpg",
//             "icon_active": "http://jobs.test"
//         },
//         "provider": null,
//         "avatar": "/users/avatars/",
//         "quiz": [],
//         "is_before_school": false,
//         "is_midrashot": false,
//         "created_at": "2020-10-27T13:42",
//         "updated_at": "2020-11-10T10:06"
//     },
//     "show_info": [
//         "פרסום חוות הדעת עם הפרטים שלי",
//         "פרסום חוות הדעת ללא הפרטים שלי"
//     ],
//     "dates": [
//         "2020",
//         2019,
//         2018
//     ],
//     "duration": {
//         "1": "שנה אחת",
//         "2": "שנתיים",
//         "3": "שלוש שנים"
//     }
// }
export const storeReview = (job_id) => `${api}/jobs/${job_id}/reviews/store`
// POST
// const Request = {
//     job_id: Number,
//     toekn: String,
//     first_name: String,
//     last_name: String,
//     phone: String,
//     show_info: Number,
//     description: String,
//     stars: Number,
//     date: Number,
//     duration: Number,
//     avatar: String
// }
// const Response = {
//     message: 'success'
// }

// chats & notifications
export const getConversations = `${api}/chat/conversations`
// GET 
// const Request = {
//     token: String 
// }
// const Response = {
//     "data": [
//         {
//             "first_name": "Mush",
//             "last_name": "Harutyunyan",
//             "organization_name": "אופק",
//             "avatar": "",
//             "new_message": 2
//         }
//     ]
// }
// const correctedResponse = {
//     "data": [
//         {
//             "first_name": "Mush",
//             "last_name": "Harutyunyan",
//             "organization_name": "אופק",
//             "avatar": "",
//             "new_messages": 2,
//              chat_id: 3,
//              messsages: [
//                          {
//                              id: 1,
//                              message: String,
//                              date: String,
//                              is_me: true,
//                              chat_id: 3
//                           },
//                           {
//                              "id": 2,
//                              "message": "New message",
//                              "date": "2020-11-12",
//                              "is_me": false,
//                              chat_id: 3
//                            }
//                          ]
//         }
//     ]
// }
export const getMessages = (chat_id) => `${api}/chat/conversation/${chat_id}`
// GET 
// const Request = {
//     token: String,
//     chat_id: Number
// }
// const Response = {
//     "data": [
//         {
//             "id": 1,
//             "message": "New message",
//             "date": "2020-11-12",
//             "is_me": false
//         },
//         {
//             "id": 2,
//             "message": "New message",
//             "date": "2020-11-12",
//             "is_me": false
//         }
//     ]
// }
// const correctedResponse = 
// {
//     data: [
//                          {
//                              id: 1,
//                              message: String,
//                              date: String,
//                              is_me: true,
//                              chat_id: 3
//                           },
//                           {
//                              "id": 2,
//                              "message": "New message",
//                              "date": "2020-11-12",
//                              "is_me": false,
//                              chat_id: 3
//                            }
//     ]
// }

export const openConversation = (chat_id) => `${api}/chat/conversation/open/${chat_id}`
// GET 
// const Request = {
//      token: String,
//      chat_id: Number 
// }
// const Response = {
//     "data": [
//         {
//             "id": 1,
//             "message": "New message",
//             "date": "2020-11-12",
//             "is_me": true
//         },
//         {
//             "id": 2,
//             "message": "New message",
//             "date": "2020-11-12",
//             "is_me": true
//         }
//     ]
// }
// const correctedResponse = {
//     "data": [
//         {
//             "first_name": "Mush",
//             "last_name": "Harutyunyan",
//             "organization_name": "אופק",
//             "avatar": "",
//             "new_messages": 2,
//              chat_id: 3,
//              messsages: [
//                          {
//                              id: 1,
//                              message: String,
//                              date: String,
//                              is_me: true,
//                              chat_id: 3
//                           },
//                           {
//                              "id": 2,
//                              "message": "New message",
//                              "date": "2020-11-12",
//                              "is_me": false,
//                              chat_id: 3
//                            }
//                          ]
//         }
//     ]
// }
export const createMessage = (chat_id) => `${api}/chat/conversation/${chat_id}/store`
// POST 
// const Request = {
//     token: String,
//     chat_id: Number
// }
// const Response = {
//     "data": {
//         "id": 2,
//         "message": "New message",
//         "date": "2020-11-12",
//         "is_me": true
//     }
// }
// const correctedResponse = {
//          data: 
//                          {
//                              id: 1,
//                              message: String,
//                              date: String,
//                              is_me: true,
//                              chat_id: 3
//                           }
// }

export const socketHost = `${url}/broadcasting/auth:6001`

// export const chatsSocketChannel = (chat_id) => `chats.${chat_id}`
export const chatsSocketChannel = `laravel_database_chats.1`
export const chatsSocketListener = `ChatMessageCreated`

export const notificationsSocketChannel = `laravel_database_notification`
export const notificationsSocketListener = `SendNotificationAdmin`
