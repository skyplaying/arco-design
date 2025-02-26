const Calendar = {
  formatYear: 'YYYY',
  formatMonth: 'MMM YYYY',
  today: 'วันนี้',
  view: {
    month: 'เดือน',
    year: 'ปี',
    week: 'สัปดาห์',
    day: 'วัน',
  },
  month: {
    long: {
      January: 'มกราคม',
      February: 'กุมภาพันธ์',
      March: 'มีนาคม',
      April: 'เมษายน',
      May: 'อาจ',
      June: 'มิถุนายน',
      July: 'กรกฎาคม',
      August: 'สิงหาคม',
      September: 'กันยายน',
      October: 'ตุลาคม',
      November: 'พฤศจิกายน',
      December: 'ธันวาคม',
    },
    short: {
      January: 'Jan',
      February: 'Feb',
      March: 'Mar',
      April: 'Apr',
      May: 'May',
      June: 'Jun',
      July: 'Jul',
      August: 'Aug',
      September: 'Sept',
      October: 'Oct',
      November: 'Nov',
      December: 'Dec',
    },
  },
  week: {
    long: {
      self: 'สัปดาห์',
      monday: 'วันจันทร์',
      tuesday: 'วันอังคาร',
      wednesday: 'วันพุธ',
      thursday: 'วันพฤหัสบดี',
      friday: 'วันศุกร์',
      saturday: 'วันเสาร์',
      sunday: 'วันอาทิตย์',
    },
    short: {
      self: 'สัปดาห์',
      monday: 'Mon',
      tuesday: 'Tue',
      wednesday: 'Wed',
      thursday: 'Thu',
      friday: 'Fri',
      saturday: 'Sat',
      sunday: 'Sun',
    },
  },
};

export default {
  locale: 'th-TH',
  Calendar,
  DatePicker: {
    Calendar,
    placeholder: {
      date: 'โปรดเลือกวันที่',
      week: 'โปรดเลือกสัปดาห์',
      month: 'โปรดเลือกเดือน',
      year: 'โปรดเลือกปี',
      quarter: 'โปรดเลือกไตรมาส',
    },
    placeholders: {
      date: ['วันที่เริ่มต้น', 'วันที่สิ้นสุด'],
      week: ['เริ่มต้นสัปดาห์', 'สิ้นสุดสัปดาห์'],
      month: ['เริ่มเดือน', 'สิ้นเดือน'],
      year: ['เริ่มต้นปี', 'สิ้นปี'],
      quarter: ['เริ่มไตรมาส', 'สิ้นไตรมาส'],
    },
    selectTime: 'เลือกเวลา',
    selectDate: 'เลือกวันที่',
    today: 'วันนี้',
    now: 'ตอนนี้',
    ok: 'ตกลง',
  },
  Drawer: {
    okText: 'ตกลง',
    cancelText: 'ยกเลิก',
  },
  Empty: {
    noData: 'ไม่มีข้อมูล',
  },
  Modal: {
    okText: 'ตกลง',
    cancelText: 'ยกเลิก',
  },
  Pagination: {
    goto: 'ไปที่',
    page: 'หน้า',
    countPerPage: ' / หน้า',
    total: 'รวม: {0}',
  },
  Popconfirm: {
    okText: 'ตกลง',
    cancelText: 'ยกเลิก',
  },
  Table: {
    okText: 'ตกลง',
    resetText: 'รีเซ็ต',
    sortAscend: 'คลิกเพื่อเรียงลำดับจากน้อยไปมาก',
    sortDescend: 'คลิกเพื่อเรียงลำดับจากมากไปหาน้อย',
    cancelSort: 'คลิกเพื่อยกเลิกการเรียงลำดับ',
  },
  TimePicker: {
    ok: 'ตกลง',
    placeholder: 'เลือกเวลา',
    placeholders: ['เวลาเริ่มต้น', 'เวลาสิ้นสุด'],
    now: 'ตอนนี้',
  },
  Progress: {
    success: 'เสร็จเรียบร้อย',
    error: 'ล้มเหลว',
  },
  Upload: {
    start: 'เริ่ม',
    cancel: 'ยกเลิก',
    delete: 'ลบ',
    reupload: 'คลิกเพื่อลองอีกครั้ง',
    upload: 'ที่อัพโหลด',
    preview: 'ดูตัวอย่าง',
    drag: 'คลิกหรือลากไฟล์ไปยังพื้นที่นี้เพื่ออัปโหลด',
    dragHover: 'ปล่อยเพื่ออัปโหลด',
    error: 'ข้อผิดพลาดในการอัปโหลด',
  },
  Typography: {
    copy: 'สำเนา',
    copied: 'คัดลอกแล้ว',
    edit: 'แก้ไข',
    fold: 'พับ',
    unfold: 'แฉ',
  },
  Transfer: {
    resetText: 'รีเซ็ต',
  },
  ImagePreview: {
    fullScreen: 'เต็มจอ',
    rotateRight: 'หมุนไปทางขวา',
    rotateLeft: 'หมุนซ้าย',
    zoomIn: 'ขยายเข้า',
    zoomOut: 'ซูมออก',
    originalSize: 'ขนาดต้นฉบับ',
  },
};
