/**
 * 動的インポートでOpenLayersのモジュールを読み込む
 * Promise.all()で使う文だけ読み込むと便利かも
 * 
 * @example
 * import olDynamic from 'ol-dynamic'
 * const [Map, View] = await new Promise.all([olDynamic.Map, olDynamic.View])
 */

 /**
  * 
  * @param {Object} obj 
  * @param {string} path separate by '/' 
  */
function getProperty(obj, path) {
  let prop = obj
  for(const p of path.split('/')) {
    if (!prop[p]) {
      throw new Error(`Access unknown property name... path=${path}`)
    }
    prop = prop[p]
  }
  return prop
}

/**
 * 
 * @param {Object} obj 
 * @param {string} path separate by '/'
 * @param {any} value 
 */
function setProperty(obj, path, value) {
  const pred = (prop, pathList, value) => {
    const p = pathList[0]
    pathList.length === 1
			? prop[p] = value
			: pred(prop[p] ? prop[p] : prop[p] = {}, pathList.slice(1), value)
  }
  pred(obj, path.split('/'), value)
}

export default {
  /**
   * 階層構造を持つモジュールを指定するときは`/`で区切ってください
   * @param {Array<string>} list 読み込むモジュールのリスト。
   */
  imports: async function(list) {
    let importList = []
    for(const l of list) {
      const dynamicImport = getProperty(this, l)
      importList.push(dynamicImport())
    }
    const modules = await Promise.all(importList)
    let ol = {}
    for (let i=0; i<list.length; ++i) {
      setProperty(ol, list[i], modules[i])
    }
    return ol
  },
  Map: () => import(/* webpackChunkName: "ol/Map" */ 'ol/Map.js'),
  View: () => import(/* webpackChunkName: "ol/View" */ 'ol/View.js'),
  layer: () => import(/* webpackChunkName: "ol/layer" */ 'ol/layer.js'),
  source: () => import(/* webpackChunkName: "ol/source" */ 'ol/source.js'),
  Feature: () => import(/* webpackChunkName: "ol/Feature" */ 'ol/Feature.js'),
  Geolocation: () => import(/* webpackChunkName: "ol/Geolocation" */ 'ol/Geolocation.js'),
  interaction: () => import(/* webpackChunkName: "ol/interaction" */ 'ol/interaction.js'),
  style: () => import(/* webpackChunkName: "ol/style" */ 'ol/style.js'),
  geom: {
    Point: () => import(/* webpackChunkName: "ol/geom/Point" */ 'ol/geom/Point.js')
  }
}