import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MovieCard from "./MovieCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/MovieCard",
  component: MovieCard,
} as ComponentMeta<typeof MovieCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MovieCard> = (args) => (
  <MovieCard {...args} />
);

export const MovieCardNormal = Template.bind({});

MovieCardNormal.args = {
  videoId: "XkpRo8smQ5M",
  title:
    "Best Of Tropical & Deep House Music 2020 Chill Out Mix | Best Summer Hits",
  sharedName: "Xuka",
  voteUpCount: "16",
  voteDownCount: "20",
  description:
    "Hạ Còn Vương Nắng Remix | Phố Đã Lên Đèn Remix | Nonstop Vinahouse 2022 | Việt Mix 2022☝️☝️☝️ #Nonstopvinahouse2022 #Vietmix2022 #Haconvuongnangremix ________________________ ✪ Nguồn Ảnh : Đang Cập Nhật ✪ Âm Nhạc Trong Video bởi LoveMusic ✪ Đừng quên Đăng ký (Subscribe) : https://www.youtube.com/channel/UCiHeBkHFvI3cw6gagolepwA ________________________ ♫ TrackList : 00:00 | 1. Hạ còn vương nắng 02:09 | 2. Phố Đã Lên Đèn - Huyền Tâm Môn 07:14 | 3. Đường Tôi Chở Em Về - Bùi Trường Linh 11:13 | 4. Nụ Cười Em Là Nắng - Green 15:37 | 5. Nụ Cười Xuân - YuniBoo H2K 20:33 | 6. Tình Yêu Màu Hồng - Hồ Văn Quý x Xám 25:36 | 7. TRÁI TIM CỦA GIÓ - DUNG HOÀNG PHẠM 29:04 | 8. Mây Hồng Đưa Lối - DATKAA 33:37 | 9. Lưu Số Em Đi - Huỳnh Văn x Vũ Phụng Tiên 38:39 | 10. Anh Yêu Vội Thế - LaLa Trần 44:22 | 11. Chờ Ngày Cưới Em - Phát Hồ Ft Hương Ly 48:12 | 12. Yêu Rồi Cưới Thôi - Tika Tùng Anh 51:20 | 13. Anh Cho Em Mùa Xuân - H2K 54:49 | 14. Lời Yêu Ngây Dại - Kha 59:20 | 15. Như Là Tia Nắng - DuongG x kpnn",
};
