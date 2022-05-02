window.addEventListener("DOMContentLoaded", (e) => {
  //
  $(function(){
    $('#fullpage').fullpage({
      autoScrolling: true,
      navigation: true, // 네비게이션 생성
      navigationPosition: 'right', // 네비게이션 위치 지정 left or right
      scrollingSpeed: '700', // 스크롤 속도 조절
      loopTop: false, // (기본겂 false) 첫번째 구역에서 스크롤을 위로 올리면 마지막 구역으로 이동할지 여부
      loopBottom: false, // loopTop 의 반대
      scrollBar: false, // (기본값 false) 스크롤바를 표시할지 정합니다.
    });
  })

});
