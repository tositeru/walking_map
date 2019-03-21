/**
 * 動的インポートでOpenLayersのモジュールを読み込む
 *
 * @example
 * import olDynamic from 'ol-dynamic'
 * const ol = olDynamic.imports(['Map', 'View', "layer"])
 *
 * const map = new ol.Map.default({ ... })
 */

/**
  *
  * @param {Object} obj
  * @param {string} path separate by '/'
  * @return {any}
  */
function _getProperty(obj, path) {
  let prop = obj;
  for (const p of path.split('/')) {
    if (!prop[p]) {
      throw new Error(`Access unknown property name... path=${path}`);
    }
    prop = prop[p];
  }
  return prop;
}

/**
 *
 * @param {Object} obj
 * @param {string} path separate by '/'
 * @param {any} value
 */
function _setProperty(obj, path, value) {
  const pred = (prop, pathList, value) => {
    const p = pathList[0];
    pathList.length === 1
      ? prop[p] = value
      : pred(prop[p] ? prop[p] : prop[p] = {}, pathList.slice(1), value);
  };
  pred(obj, path.split('/'), value);
}

export default {
  /**
   * 階層構造を持つモジュールを指定するときは`/`で区切ってください
   *
   * @example
   * import olDynamic from 'ol-dynamic'
   * const ol = olDynamic.imports(['Map', 'View', "layer"])
   *
   * const map = new ol.Map.default({ ... })
   *
   *
   * @param {Array<string>} list 読み込むモジュールのリスト。
   * @return {Object}
   */
  imports: async function(list) {
    const importList = [];
    for (const l of list) {
      const dynamicImport = _getProperty(this, l);
      importList.push(dynamicImport());
    }
    const modules = await Promise.all(importList);
    const ol = {};
    for (let i=0; i<list.length; ++i) {
      _setProperty(ol, list[i], modules[i]);
    }
    return ol;
  },
  Map: () => import(/* webpackChunkName: "ol/Map" */ 'ol/Map.js'),
  View: () => import(/* webpackChunkName: "ol/View" */ 'ol/View.js'),
  layer: () => import(/* webpackChunkName: "ol/layer" */ 'ol/layer.js'),
  source: () => import(/* webpackChunkName: "ol/source" */ 'ol/source.js'),
  Feature: () => import(/* webpackChunkName: "ol/Feature" */ 'ol/Feature.js'),
  Geolocation: () =>
    import(/* webpackChunkName: "ol/Geolocation" */ 'ol/Geolocation.js'),
  interaction: () =>
    import(/* webpackChunkName: "ol/interaction" */ 'ol/interaction.js'),
  style: () => import(/* webpackChunkName: "ol/style" */ 'ol/style.js'),
  geom: {
    Point: () =>
      import(/* webpackChunkName: "ol/geom/Point" */ 'ol/geom/Point.js'),
  },
};
