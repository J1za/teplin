import classnames from "classnames";

import styles from "./style.module.scss";

import ReactPaginate from 'react-paginate';
import { MobileUp, MobileDown } from "components/media";

import Button from "../Button";

export default function Pagination() {
  return (
    <>
      <MobileUp>
        <ReactPaginate
          nextLabel={<IconArrow />}
          previousLabel={<IconArrow />}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={10}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          containerClassName={styles.pagination}
          subContainerClassName={"pages pagination"}
          activeClassName={styles.pagination_active}
          previousClassName={styles.pagination_previous}
          nextClassName={styles.pagination_next}
        />
      </MobileUp>
      <MobileDown>
        <Button morePosts>More Posts <IconArrowMore /></Button>
      </MobileDown>
    </>
  )
}

const IconArrow = () => (
  <svg width="12" height="18" viewBox="0 0 12 18">
    <path d="M2.96505 0.429544L11.5348 9.00044L2.96564 17.5708C2.39272 18.1431 1.4654 18.1431 0.894238 17.5708C0.321907 16.9984 0.322493 16.0717 0.894238 15.4993L7.39256 8.99985L0.893652 2.49919C0.321907 1.92686 0.321907 1.00012 0.893651 0.428371C1.46598 -0.142788 2.39272 -0.142786 2.96505 0.429544Z" />
  </svg>

)

const IconArrowMore = () => (
  <svg width="16" height="11" viewBox="0 0 16 11">
    <path d="M10.5142 0.798117L9.82422 1.48809C9.65713 1.65519 9.65987 1.92698 9.83031 2.09067L12.668 4.81591H0.546875C0.313895 4.81591 0.125 5.0048 0.125 5.23778V6.22216C0.125 6.45514 0.313895 6.64403 0.546875 6.64403H12.668L9.83034 9.36927C9.65987 9.53296 9.65713 9.80475 9.82426 9.97185L10.5142 10.6618C10.679 10.8266 10.9461 10.8266 11.1109 10.6618L15.7444 6.02827C15.9092 5.86353 15.9092 5.59641 15.7444 5.43164L11.1108 0.798117C10.9461 0.633375 10.6789 0.633375 10.5142 0.798117Z" />
  </svg>
)