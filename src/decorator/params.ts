import {defaultMetadataArgsStorage} from "../index";
import {ParamTypes} from "../metadata/types/ParamTypes";
import {ParamOptions} from "./options/ParamOptions";
import {ParamMetadataArgs} from "../metadata/args/ParamMetadataArgs";

/**
 * This decorator allows to inject a Request object to the controller action parameter. After that you can fully use
 * Request object in your action method. Applied to class method parameters.
 */
export function Req() {
    return function (object: Object, methodName: string, index: number) {
        const reflectedType = (Reflect as any).getMetadata("design:paramtypes", object, methodName)[index];
        const metadata: ParamMetadataArgs = {
            target: object.constructor,
            method: methodName,
            index: index,
            type: ParamTypes.REQUEST,
            reflectedType: reflectedType,
            parseJson: false,
            isRequired: false
        };
        defaultMetadataArgsStorage().params.push(metadata);
    };
}

/**
 * This decorator allows to inject a Response object to the controller action parameter. After that you can fully use
 * Response object in your action method. Applied to class method parameters.
 */
export function Res() {
    return function (object: Object, methodName: string, index: number) {
        const reflectedType = (Reflect as any).getMetadata("design:paramtypes", object, methodName)[index];
        const metadata: ParamMetadataArgs = {
            target: object.constructor,
            method: methodName,
            index: index,
            type: ParamTypes.RESPONSE,
            reflectedType: reflectedType,
            parseJson: false,
            isRequired: false
        };
        defaultMetadataArgsStorage().params.push(metadata);
    };
}

/**
 * This decorator allows to inject a route parameter value to the controller action parameter.
 * Applied to class method parameters.
 *
 * @param name Parameter name
 * @param options Extra parameter options
 */
export function Param(name: string, options?: ParamOptions) {
    return function (object: Object, methodName: string, index: number) {
        let format = (Reflect as any).getMetadata("design:paramtypes", object, methodName)[index];
        const metadata: ParamMetadataArgs = {
            target: object.constructor,
            method: methodName,
            index: index,
            type: ParamTypes.PARAM,
            reflectedType: format,
            name: name,
            format: format,
            parseJson: options ? options.parseJson : false,
            isRequired: options ? options.required : false
        };
        defaultMetadataArgsStorage().params.push(metadata);
    };
}

/**
 * This decorator allows to inject a query parameter value to the controller action parameter.
 * Applied to class method parameters.
 *
 * @param name Parameter name
 * @param options Extra parameter options
 */
export function QueryParam(name: string, options?: ParamOptions) {
    return function (object: Object, methodName: string, index: number) {
        const format = (Reflect as any).getMetadata("design:paramtypes", object, methodName)[index];
        const metadata: ParamMetadataArgs = {
            target: object.constructor,
            method: methodName,
            index: index,
            type: ParamTypes.QUERY,
            reflectedType: format,
            name: name,
            format: format,
            parseJson: options ? options.parseJson : false,
            isRequired: options ? options.required : false
        };
        defaultMetadataArgsStorage().params.push(metadata);
    };
}

/**
 * This decorator allows to inject http header parameter value to the controller action parameter.
 * Applied to class method parameters.
 *
 * @param name Parameter name
 * @param options Extra parameter options
 */
export function HeaderParam(name: string, options?: ParamOptions) {
    return function (object: Object, methodName: string, index: number) {
        const format = (Reflect as any).getMetadata("design:paramtypes", object, methodName)[index];
        const metadata: ParamMetadataArgs = {
            target: object.constructor,
            method: methodName,
            index: index,
            type: ParamTypes.HEADER,
            reflectedType: format,
            name: name,
            format: format,
            parseJson: options ? options.parseJson : false,
            isRequired: options ? options.required : false
        };
        defaultMetadataArgsStorage().params.push(metadata);
    };
}

/**
 * This decorator allows to inject a cookie value to the controller action parameter.
 * Applied to class method parameters.
 *
 * @param name Cookie parameter name
 * @param options Extra parameter options
 */
export function CookieParam(name: string, options?: ParamOptions) {
    return function (object: Object, methodName: string, index: number) {
        let format = (Reflect as any).getMetadata("design:paramtypes", object, methodName)[index];
        const metadata: ParamMetadataArgs = {
            target: object.constructor,
            method: methodName,
            index: index,
            type: ParamTypes.COOKIE,
            reflectedType: format,
            name: name,
            format: format,
            parseJson: options ? options.parseJson : false,
            isRequired: options ? options.required : false
        };
        defaultMetadataArgsStorage().params.push(metadata);
    };
}


/**
 * This decorator allows to inject a request body value to the controller action parameter.
 * Applied to class method parameters.
 *
 * @param options Extra parameter options
 */
export function Body(options?: { required?: boolean }) {
    return function (object: Object, methodName: string, index: number) {
        const format = (Reflect as any).getMetadata("design:paramtypes", object, methodName)[index];
        const metadata: ParamMetadataArgs = {
            target: object.constructor,
            method: methodName,
            index: index,
            type: ParamTypes.BODY,
            reflectedType: format,
            format: format,
            parseJson: false,
            isRequired: options ? options.required : false
        };
        defaultMetadataArgsStorage().params.push(metadata);
    };
}

/**
 * This decorator allows to inject a request body's value to the controller action parameter.
 * Applied to class method parameters.
 *
 * @param name Body's parameter name
 * @param options Extra parameter options
 */
export function BodyParam(name: string, options?: ParamOptions) {
    return function (object: Object, methodName: string, index: number) {
        let format = (Reflect as any).getMetadata("design:paramtypes", object, methodName)[index];
        const metadata: ParamMetadataArgs = {
            target: object.constructor,
            method: methodName,
            index: index,
            type: ParamTypes.BODY_PARAM,
            reflectedType: format,
            name: name,
            format: format,
            parseJson: options ? options.parseJson : false,
            isRequired: options ? options.required : false
        };
        defaultMetadataArgsStorage().params.push(metadata);
    };
}

/**
 * This decorator allows to inject "file" from a request to a given parameter of the controller action.
 */
export function UploadedFile(name?: string, options?: { required?: boolean }): Function {
    return function (object: Object, methodName: string, index: number) {
        const format = (Reflect as any).getMetadata("design:paramtypes", object, methodName)[index];
        const metadata: ParamMetadataArgs = {
            target: object.constructor,
            method: methodName,
            index: index,
            type: ParamTypes.UPLOADED_FILE,
            reflectedType: format,
            name: name,
            format: format,
            parseJson: false,
            isRequired: options ? options.required : false
        };
        defaultMetadataArgsStorage().params.push(metadata);
    };
}

/**
 * This decorator allows to inject "files" from a request to a given parameter of the controller action.
 *
 * @param options Extra parameter options
 */
export function UploadedFiles(options?: { required?: boolean }): Function {
    return function (object: Object, methodName: string, index: number) {
        const format = (Reflect as any).getMetadata("design:paramtypes", object, methodName)[index];
        const metadata: ParamMetadataArgs = {
            target: object.constructor,
            method: methodName,
            index: index,
            type: ParamTypes.UPLOADED_FILES,
            reflectedType: format,
            name: name,
            format: format,
            parseJson: false,
            isRequired: options ? options.required : false
        };
        defaultMetadataArgsStorage().params.push(metadata);
    };
}