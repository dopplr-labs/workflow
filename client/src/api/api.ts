/* tslint:disable */
/* eslint-disable */
/**
 * Workflow API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface CreateIssueDto
 */
export interface CreateIssueDto {
    /**
     * 
     * @type {string}
     * @memberof CreateIssueDto
     */
    status?: CreateIssueDtoStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateIssueDto
     */
    priority?: CreateIssueDtoPriorityEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateIssueDto
     */
    estimate?: CreateIssueDtoEstimateEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateIssueDto
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof CreateIssueDto
     */
    description?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum CreateIssueDtoStatusEnum {
    Backlog = 'BACKLOG',
    Todo = 'TODO',
    Inprogress = 'INPROGRESS',
    Inreview = 'INREVIEW',
    Done = 'DONE',
    Cancelled = 'CANCELLED'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateIssueDtoPriorityEnum {
    None = 'NONE',
    Urgent = 'URGENT',
    High = 'HIGH',
    Medium = 'MEDIUM',
    Low = 'LOW'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateIssueDtoEstimateEnum {
    None = 'NONE',
    Xs = 'XS',
    S = 'S',
    M = 'M',
    L = 'L',
    Xl = 'XL'
}

/**
 * 
 * @export
 * @interface CreateUserDto
 */
export interface CreateUserDto {
    /**
     * 
     * @type {string}
     * @memberof CreateUserDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserDto
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserDto
     */
    password: string;
}
/**
 * 
 * @export
 * @interface Issue
 */
export interface Issue {
    /**
     * 
     * @type {string}
     * @memberof Issue
     */
    status: IssueStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof Issue
     */
    priority: IssuePriorityEnum;
    /**
     * 
     * @type {string}
     * @memberof Issue
     */
    estimate: IssueEstimateEnum;
    /**
     * 
     * @type {string}
     * @memberof Issue
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Issue
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Issue
     */
    description: string | null;
    /**
     * 
     * @type {string}
     * @memberof Issue
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof Issue
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof Issue
     */
    createdBy: string;
}

/**
    * @export
    * @enum {string}
    */
export enum IssueStatusEnum {
    Backlog = 'BACKLOG',
    Todo = 'TODO',
    Inprogress = 'INPROGRESS',
    Inreview = 'INREVIEW',
    Done = 'DONE',
    Cancelled = 'CANCELLED'
}
/**
    * @export
    * @enum {string}
    */
export enum IssuePriorityEnum {
    None = 'NONE',
    Urgent = 'URGENT',
    High = 'HIGH',
    Medium = 'MEDIUM',
    Low = 'LOW'
}
/**
    * @export
    * @enum {string}
    */
export enum IssueEstimateEnum {
    None = 'NONE',
    Xs = 'XS',
    S = 'S',
    M = 'M',
    L = 'L',
    Xl = 'XL'
}

/**
 * 
 * @export
 * @interface LoginDto
 */
export interface LoginDto {
    /**
     * 
     * @type {string}
     * @memberof LoginDto
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof LoginDto
     */
    password: string;
}
/**
 * 
 * @export
 * @interface LoginResponseDto
 */
export interface LoginResponseDto {
    /**
     * 
     * @type {UserWithoutSensitiveData}
     * @memberof LoginResponseDto
     */
    user: UserWithoutSensitiveData;
    /**
     * 
     * @type {string}
     * @memberof LoginResponseDto
     */
    token: string;
}
/**
 * 
 * @export
 * @interface UserWithoutSensitiveData
 */
export interface UserWithoutSensitiveData {
    /**
     * 
     * @type {string}
     * @memberof UserWithoutSensitiveData
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof UserWithoutSensitiveData
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof UserWithoutSensitiveData
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof UserWithoutSensitiveData
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof UserWithoutSensitiveData
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof UserWithoutSensitiveData
     */
    profileImage: string | null;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateUserDto} createUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerCreateUser: async (createUserDto: CreateUserDto, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'createUserDto' is not null or undefined
            assertParamExists('authControllerCreateUser', 'createUserDto', createUserDto)
            const localVarPath = `/auth/signup`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createUserDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {LoginDto} loginDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerLogin: async (loginDto: LoginDto, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'loginDto' is not null or undefined
            assertParamExists('authControllerLogin', 'loginDto', loginDto)
            const localVarPath = `/auth/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(loginDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {CreateIssueDto} createIssueDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issuesControllerAddIssue: async (createIssueDto: CreateIssueDto, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'createIssueDto' is not null or undefined
            assertParamExists('issuesControllerAddIssue', 'createIssueDto', createIssueDto)
            const localVarPath = `/issues`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createIssueDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issuesControllerDeleteIssue: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('issuesControllerDeleteIssue', 'id', id)
            const localVarPath = `/issues/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issuesControllerGetIssue: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('issuesControllerGetIssue', 'id', id)
            const localVarPath = `/issues/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issuesControllerGetIssues: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/issues`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerFindAll: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerFindCurrentUser: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/users/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {CreateUserDto} createUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerCreateUser(createUserDto: CreateUserDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authControllerCreateUser(createUserDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {LoginDto} loginDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerLogin(loginDto: LoginDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authControllerLogin(loginDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {CreateIssueDto} createIssueDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async issuesControllerAddIssue(createIssueDto: CreateIssueDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Issue>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.issuesControllerAddIssue(createIssueDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async issuesControllerDeleteIssue(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.issuesControllerDeleteIssue(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async issuesControllerGetIssue(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Issue>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.issuesControllerGetIssue(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async issuesControllerGetIssues(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Issue>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.issuesControllerGetIssues(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerFindAll(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<UserWithoutSensitiveData>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userControllerFindAll(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerFindCurrentUser(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserWithoutSensitiveData>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userControllerFindCurrentUser(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @param {CreateUserDto} createUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerCreateUser(createUserDto: CreateUserDto, options?: any): AxiosPromise<LoginResponseDto> {
            return localVarFp.authControllerCreateUser(createUserDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {LoginDto} loginDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerLogin(loginDto: LoginDto, options?: any): AxiosPromise<LoginResponseDto> {
            return localVarFp.authControllerLogin(loginDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CreateIssueDto} createIssueDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issuesControllerAddIssue(createIssueDto: CreateIssueDto, options?: any): AxiosPromise<Issue> {
            return localVarFp.issuesControllerAddIssue(createIssueDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issuesControllerDeleteIssue(id: string, options?: any): AxiosPromise<object> {
            return localVarFp.issuesControllerDeleteIssue(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issuesControllerGetIssue(id: string, options?: any): AxiosPromise<Issue> {
            return localVarFp.issuesControllerGetIssue(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issuesControllerGetIssues(options?: any): AxiosPromise<Array<Issue>> {
            return localVarFp.issuesControllerGetIssues(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerFindAll(options?: any): AxiosPromise<Array<UserWithoutSensitiveData>> {
            return localVarFp.userControllerFindAll(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerFindCurrentUser(options?: any): AxiosPromise<UserWithoutSensitiveData> {
            return localVarFp.userControllerFindCurrentUser(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @param {CreateUserDto} createUserDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public authControllerCreateUser(createUserDto: CreateUserDto, options?: any) {
        return DefaultApiFp(this.configuration).authControllerCreateUser(createUserDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {LoginDto} loginDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public authControllerLogin(loginDto: LoginDto, options?: any) {
        return DefaultApiFp(this.configuration).authControllerLogin(loginDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CreateIssueDto} createIssueDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public issuesControllerAddIssue(createIssueDto: CreateIssueDto, options?: any) {
        return DefaultApiFp(this.configuration).issuesControllerAddIssue(createIssueDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public issuesControllerDeleteIssue(id: string, options?: any) {
        return DefaultApiFp(this.configuration).issuesControllerDeleteIssue(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public issuesControllerGetIssue(id: string, options?: any) {
        return DefaultApiFp(this.configuration).issuesControllerGetIssue(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public issuesControllerGetIssues(options?: any) {
        return DefaultApiFp(this.configuration).issuesControllerGetIssues(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public userControllerFindAll(options?: any) {
        return DefaultApiFp(this.configuration).userControllerFindAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public userControllerFindCurrentUser(options?: any) {
        return DefaultApiFp(this.configuration).userControllerFindCurrentUser(options).then((request) => request(this.axios, this.basePath));
    }
}


