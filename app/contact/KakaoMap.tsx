export default function KakaoMap() {
    return (
        <div style={{
            width: '100%',
            maxWidth: '768px',
            height: '632px',
            color: '#333',
            position: 'relative',
            margin: '0 auto'
        }}>
            <div style={{height: '600px'}}>
                <a href="https://map.kakao.com/?urlX=506290.0&urlY=1109543.0&name=%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EC%84%9C%EC%B4%88%EB%8C%80%EB%A1%9C78%EA%B8%B8%2044&map_type=TYPE_MAP&from=roughmap"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="block w-full"
                >
                    <img
                        className="map rounded-t-md w-full h-[598px] border border-[#ccc] object-cover"
                        src="http://t1.daumcdn.net/roughmap/imgmap/d2972f680192e336b07b279bc69896aacd2e19543809d996c7f2837ba2c1b403"
                        width="1278"
                        height="598"
                        alt="카카오맵"
                    />
                </a>
            </div>
            <div className="overflow-hidden px-[11px] py-[7px] border border-[rgba(0,0,0,0.1)] rounded-b-md bg-[#f9f9f9] flex justify-between items-center">
                <a href="https://map.kakao.com" target="_blank" rel="noopener noreferrer">
                    <img
                        src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
                        width="72"
                        height="16"
                        alt="카카오맵"
                        style={{display: 'block', width: '72px', height: '16px'}}
                    />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://map.kakao.com/?from=roughmap&eName=%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EC%84%9C%EC%B4%88%EB%8C%80%EB%A1%9C78%EA%B8%B8%2044&eX=506290.0&eY=1109543.0"
                    className="text-xs text-black no-underline h-[15px] leading-[15px] pt-[1px]"
                >
                    길찾기
                </a>
            </div>
        </div>
    );
} 