import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const ProfileIcon = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M16.072 4.024c-.966-.982-2.33-1.524-3.92-1.524-1.59 0-2.954.542-3.92 1.524C7.266 5.006 6.736 6.39 6.736 8c0 2.169.945 3.567 2.114 4.406.227.163.462.305.698.427a7.9 7.9 0 0 0-3.23 1.76c-1.365 1.227-2.212 2.806-2.782 4.22a.5.5 0 1 0 .928.374c.542-1.346 1.317-2.767 2.523-3.85C8.18 14.265 9.82 13.5 12.152 13.5c2.18 0 3.754.668 4.922 1.628 1.178.967 1.971 2.254 2.54 3.525.379.849-.287 1.847-1.331 1.847H6.745a.5.5 0 0 0 0 1h11.538c1.652 0 2.965-1.641 2.244-3.255-.604-1.35-1.477-2.788-2.818-3.89a7.892 7.892 0 0 0-2.889-1.504 4.99 4.99 0 0 0 1.51-1.292A5.936 5.936 0 0 0 17.568 8c0-1.611-.53-2.994-1.496-3.976Zm-.713.702c.755.768 1.209 1.885 1.209 3.274 0 .9-.314 2.038-1.024 2.94-.697.886-1.783 1.56-3.392 1.56-.65 0-1.773-.227-2.72-.906C8.513 10.933 7.737 9.83 7.737 8c0-1.389.454-2.506 1.209-3.274.754-.768 1.848-1.226 3.207-1.226 1.359 0 2.453.458 3.207 1.226Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ProfileIcon;
