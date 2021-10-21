import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function StatusTicket(props) {
    return (
        <Svg
            width={responsiveWidth(8.5)}
            height={responsiveWidth(8.5)}
            viewBox="0 0 17.239 17.227"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#162A65"
                d="M0 10.698L10.698 0l2.461 2.462c-.066.122-.148.271-.228.422a1.046 1.046 0 001.407 1.423c.155-.079.308-.166.451-.243l2.451 2.452L6.529 17.227l-2.452-2.454.224-.412c.231-.438.163-.932-.176-1.265-.335-.33-.822-.393-1.253-.162-.142.076-.283.153-.411.224L0 10.698zm8.952-6.977l4.56 4.561 1.778-1.778c-.223-.222-.456-.45-.684-.683-.063-.065-.118-.08-.21-.061-.781.166-1.498.012-2.106-.508-.746-.636-1.004-1.454-.822-2.415.009-.053.014-.131-.016-.161-.239-.252-.486-.494-.722-.73-.604.601-1.197 1.194-1.778 1.775z"
            />
        </Svg>
    );
}