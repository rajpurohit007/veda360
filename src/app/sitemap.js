"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sitemap;
function sitemap() {
    var baseUrl = 'https://www.veda360.org';
    return [
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
        { url: "".concat(baseUrl, "/services"), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: "".concat(baseUrl, "/product"), lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
        { url: "".concat(baseUrl, "/vision"), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
        { url: "".concat(baseUrl, "/about"), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: "".concat(baseUrl, "/career"), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: "".concat(baseUrl, "/contact"), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ];
}
