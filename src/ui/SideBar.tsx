import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from '@material-tailwind/react';
import {
  HiFilm,
  HiCalendar,
  HiClipboardList,
  HiOutlineTemplate,
  HiLogout,
} from 'react-icons/hi';
import { Link } from 'react-router-dom';
export function SideBar() {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Metiz
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <HiFilm className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/quan-li-phim">Phim</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <HiCalendar className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/quan-li-lich-chieu">Lịch chiếu phim</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <HiClipboardList className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/quan-li-hoa-don">Hóa đơn</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <HiOutlineTemplate className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/quan-li-phong-rap">Phòng rạp</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <HiLogout className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/">Trở về trang chủ</Link>
        </ListItem>
      </List>
    </Card>
  );
}
