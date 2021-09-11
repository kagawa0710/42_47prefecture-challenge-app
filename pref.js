const map = "https://github.com/geolonia/japanese-prefectures/blob/caf0ea31cb7ccb11e97542c1aa96b23476487a40/map-full.svg" // Or "./map-mobile.svg"
const container = document.querySelector( '#map' )

const res = await fetch( map )

if ( res.ok ) {
  const svg = await res.text()
  container.innerHTML = svg
  const prefs = document.querySelectorAll( '.geolonia-svg-map .prefecture' )

  prefs.forEach( ( pref ) => {
    // マウスオーバーで色を変える
    pref.addEventListener( 'mouseover', ( event ) => {
      event.currentTarget.style.fill = "#ff0000"
    } )

    // マウスが離れたら色をもとに戻す
    pref.addEventListener( 'mouseleave', ( event ) => {
      event.currentTarget.style.fill = ""
    } )

    // マウスクリック時のイベント
    pref.addEventListener( 'click', ( event ) => {
      location.href = `https://example.com/${event.currentTarget.dataset.code}` // 例（大阪）: https://example.com/27
    } )
  } )
}
