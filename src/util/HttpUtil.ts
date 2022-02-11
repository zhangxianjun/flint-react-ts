import {To} from "history";
import {NavigateOptions} from "react-router";

interface PostData {
    url: String;
    data: any;
    (res: String): void;
}

function post(data: PostData) {

}

export {post}