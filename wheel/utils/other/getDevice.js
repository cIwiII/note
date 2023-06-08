/**
 * 
 * @returns 获取设备类型
 */
export let getDevice = () => {
    let agent = navigator.userAgent.toLowerCase();
    let result = {
        device: function () {
            if (/windows/.test(agent)) {
                return 'windows pc';
            } else if (/iphone|ipod/.test(agent) && /mobile/.test(agent)) {
                return 'iphone';
            } else if (/ipad/.test(agent) && /mobile/.test(agent)) {
                return 'ipad';
            } else if (/android/.test(agent) && /mobile/.test(agent)) {
                return 'android';
            } else if (/linux/.test(agent)) {
                return 'linux pc';
            } else if (/mac/.test(agent)) {
                return 'mac';
            } else {
                return 'other';
            }
        }(),
    };
    return result;
};
