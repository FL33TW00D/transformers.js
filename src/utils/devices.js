
/**
 * The list of devices supported by Transformers.js
 */
export const DEVICE_TYPES = Object.freeze({
    auto: 'auto', // Auto-detect based on device and environment
    gpu: 'gpu', // Auto-detect GPU
    cpu: 'cpu', // Auto-detect CPU 
    npu: 'npu', // Auto-detect NPU
});

/**
 * @typedef {keyof typeof DEVICE_TYPES} DeviceType
 */


/**
 * @typedef {import('onnxruntime-common').InferenceSession.ExecutionProviderConfig} ONNXExecutionProviders
 */

//Most likely don't need this, can map straight from the request to the
//ONNXExecutionProviders
/** @type {Record<import("../utils/devices.js").DeviceType, ONNXExecutionProviders>} */
export const ORTExecutionProvider = Object.freeze({
    auto: null, // Auto-detect based on device and environment
    gpu: null, // Auto-detect GPU
    cpu: 'cpu', // CPU
    wasm: 'wasm', // WebAssembly
    webgpu: 'webgpu', // WebGPU
    cuda: 'cuda', // CUDA
    dml: 'dml', // DirectML

    webnn: { name: 'webnn', deviceType: 'cpu' }, // WebNN (default)
    'webnn-npu': { name: 'webnn', deviceType: 'npu' }, // WebNN NPU
    'webnn-gpu': { name: 'webnn', deviceType: 'gpu' }, // WebNN GPU
    'webnn-cpu': { name: 'webnn', deviceType: 'cpu' }, // WebNN CPU
});

export class Device {
    /**
     * @param {DeviceType} type
     * @returns {Device}
     */
    constructor(device_type) {
        this.device_type = device_type;
    }

    /**
     * Selects the optimal ORT executor based on the model, current environment and
     * requested data type.
     * See the flowchart here: https://github.com/xenova/transformers.js/issues/960
     * @returns {ORTExecutionProvider}
     */
    function selectAutoExecutor() {
        if (shouldUseWebGPU()) {
            //todo
        } else if (shouldUseWebNN()) {
            //todo
        } else {
            //todo
        } 
    }
    
    /**
     * @returns {ORTExecutionProviders}
     */
    function shouldUseWebGPU() {

    }

    function shouldUseWebNN() {

    }

    async function selectWebGPUDType () {
        if (cachedResult === undefined) {
            if (!apis.IS_WEBGPU_AVAILABLE) {
                cachedResult = false;
            } else {
                try {
                    const adapter = await navigator.gpu.requestAdapter();
                    cachedResult = adapter.features.has('shader-f16');
                } catch (e) {
                    cachedResult = false;
                }
            }
        }
        return cachedResult;
    }

}
