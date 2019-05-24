export default `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" class="cufon-active cufon-ready gr__igracias_telkomuniversity_ac_id" lang="en-US">

<head profile="http://gmpg.org/xfn/11">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async="" src="1100121021%20Registrasi%20|%20Telkom%20University_files/js.js"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-46662798-41');
    </script>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="Keywords" content="sisfo it telkom">
    <meta name="Description" content="sisfo it telkom">
    <title>1100121021 Registrasi | Telkom University</title>
    <link rel="shortcut icon" href="https://igracias.telkomuniversity.ac.id/telkom-university-icon.png" title="Favicon">
    <link rel="stylesheet" href="1100121021%20Registrasi%20|%20Telkom%20University_files/layoutLeftMenu.css" type="text/css" media="screen">
    <link rel="stylesheet" href="1100121021%20Registrasi%20|%20Telkom%20University_files/style_app.css" type="text/css" media="screen">
    <link rel="stylesheet" href="1100121021%20Registrasi%20|%20Telkom%20University_files/jquery-ui-1.css" type="text/css" media="screen">
    <link rel="stylesheet" href="1100121021%20Registrasi%20|%20Telkom%20University_files/facebox.css" type="text/css" media="screen">
    <link rel="stylesheet" href="1100121021%20Registrasi%20|%20Telkom%20University_files/left.css" type="text/css" media="screen">
    <style>
        body { background:  }
    </style>
    <script type="text/javascript" src="1100121021%20Registrasi%20|%20Telkom%20University_files/jquery-1.js"></script>
    <script type="text/javascript" src="1100121021%20Registrasi%20|%20Telkom%20University_files/jquery-ui-1.js"></script>
    <script type="text/javascript" src="1100121021%20Registrasi%20|%20Telkom%20University_files/jquery_007.js"></script>
    <script type="text/javascript" src="1100121021%20Registrasi%20|%20Telkom%20University_files/jquery_004.js"></script>
</head>

<body data-gr-c-s-loaded="true">
    <div id="pagenav">
        <ul class="sf-menu sf-js-enabled sf-shadow">
            <li class="page_item page-item-4" id="Dashboard" onmouseover="showDashboard()"><a href="https://igracias.telkomuniversity.ac.id/">Dashboard</a></li>
            <li class="page_item page-item-4" id="notification"><a href="#">0</a></li>
            <li class="page_item page-item-4" id="settings_button"><img src="1100121021%20Registrasi%20|%20Telkom%20University_files/settings-icon-small.png" title="Settings"></li>
            <li class="page_item page-item-4" id="logout_button"><a class="logout_link" href="https://igracias.telkomuniversity.ac.id/registration/logout.php">Keluar</a></li>
            <li class="page_item page-item-4" id="user_account">
                <!--<img src="../images/igracias avatar.jpg" width="30px"/>--><a href="#" title="AOMINE DAIKI">AOMINE DAIKI</a></li>

            <script>
                $(document).ready(function () {
                    $("#user_account").click(function () {
                        $("#user_account").css("background-color", "#333");
                        $(".user_account_wrapper").toggle();
                        $(".settings_wrapper").hide();
                        $(".notifications_wrapper").hide();
                        return false;
                    });
        
        
                    $(".user_account_wrapper").mouseleave(function () {
        
                        $("#user_account").css("background-color", "transparent");
                        $("#settings_button").css("background-color", "transparent");
                        $(".user_account_wrapper").hide("slow");
                        $(".user_account_wrapper_content").show();
                        return false;
                    });
        
                    $(".other_semester").click(function () {
                        $("#user_account").css("background-color", "#333");
                        $("#semester_list").toggle();
                        $(".user_account_wrapper").show();
                        $(".other_semester").hide();
                        $(".settings_wrapper").hide();
                        $(".notifications_wrapper").hide();
                        $("#current_semester").hide();
                    });
        
                    $("#settings_button").click(function () {
                        $("#settings_button").css("background-color", "#333");
                        $(".settings_wrapper").toggle();
                        $(".user_account_wrapper").hide();
                        $(".notifications_wrapper").hide();
                    });
        
                    $(".settings_wrapper").mouseleave(function () {
                        $("#settings_button").css("background-color", "transparent");
                        $("#user_account").css("background-color", "transparent");
                        $(".settings_wrapper").hide("slow");
                        $(".settings_wrapper_content").show();
                    });
        
                    $("#notification").click(function () {
                        $("#notification").css("background-color", "transparent");
                        $(".notifications_wrapper").toggle();
                        $(".user_account_wrapper").hide();
                        $(".settings_wrapper").hide();
                        document.getElementById("notification").innerHTML = "<a href='#'>" + 0 + "</a>";
                        document.title = oriTitle;
        
                        $.ajax({
                            type: "post",
                            dataType: "html",
                            url: libraryAjaxUrl + "ajax.util.php?act=last_open_notification",
        
                        });
        
                        $.get("../libraries/ajax/ajax.dashboard.php?act=getlistnotification",
                                function (data) {
                                    document.getElementById("notification_content").innerHTML = data;
                                }
                        );
        
                        return false;
                    });
        
                    $(".notifications_wrapper").mouseleave(function () {
                        $("#settings_button").css("background-color", "transparent");
                        $("#user_account").css("background-color", "transparent");
                        $(".notifications_wrapper").hide("slow");
                        $(".notifications_wrapper_content").show();
                    });
        
                    $(".change_username").delegate("click", 'a', function (evt) {
                        var userId = currentUsername;
        
                        $.ajax({
                            type: "post",
                            dataType: "html",
                            url: libraryAjaxUrl + "ajax.util.php?act=switch_username",
                            data: {"id": userId},
                            success: function (data) {
                                self.location.href = currentUrl;
                            },
                            failed: function () {
                            }
                        });
                        return false;
                    });
        
                    $(".change_usergroup").delegate("click", 'a', function (evt) {
                        var userGroupId = currentUserGroup;
        
                        $.ajax({
                            type: "post",
                            dataType: "html",
                            url: libraryAjaxUrl + "ajax.util.php?act=switch_user_group",
                            data: {"id": userGroupId},
                            success: function (data) {
                                self.location.href = currentUrl;
                            },
                            failed: function () {
                            }
                        });
                        return false;
                    });
        
        
                    $(".change_semester").delegate("click", 'a', function (evt) {
                        var semesterId = currentSemesterChange;
        
                        $.ajax({
                            type: "post",
                            dataType: "html",
                            url: libraryAjaxUrl + "ajax.util.php?act=switch_semester",
                            data: {"id": semesterId},
                            success: function (data) {
                                self.location.href = currentUrl;
                            },
                            failed: function () {
                            }
                        });
                        return false;
                    });
        
        
        
        
                    start_timer();
        
                });
        
        
                var isDashboard = false;
                var oriTitle = document.title;
                function start_timer() {
                    userSession =131097
                    $.get("../libraries/ajax/ajax.dashboard.php?act=notification",
                            function (data) {
                                if (data == -1) {
                                    self.location.href = 'index.php';
                                } else if (data == 0) {
                                    document.getElementById("notification").innerHTML = "<a href='#'>" + data + "</a>";
                                    document.title = oriTitle;
                                } else {
                                    document.getElementById("notification").innerHTML = "<a href='#' style='background:#d00;'>" + data + "</a>";
        
                                    document.title = "(" + data + ") " + oriTitle;
                                }
        
        
        
                            }
                    );
        
                    if (isDashboard == true) {
                        $.get("../libraries/ajax/ajax.dashboard.php?act=messageCount",
                                function (data) {
                                    if (data) {
                                        document.getElementById("messageCount").innerHTML = data;
                                    }
                                }
                        );
                    }
                    setTimeout("start_timer()", 60000);
                }
            </script>

        </ul>
    </div>

    <div class="user_account_wrapper">
        <div id="user_account_wrapper_content">
            <h3>Grup Pengguna </h3>
            <div class="right_content">
                <div id="usergroup_list_current">&nbsp;<span class="change_usergroup"><a href="#" onclick="currentUserGroup=12"> MAHASISWA</a></span></div>
            </div>
            <hr>
            <h3>Semester </h3>
            <ul>
                <div id="semester_list" style="display:none;margin-left:-10px;">
                    <div class="change_semester" onclick="currentSemesterChange='1516/1'"><a href="#" style="font-weight:bold;">2015/2016 - GANJIL</a></div>
                    <div class="change_semester" onclick="currentSemesterChange='1516/2'"><a href="#" style="font-weight:bold;">2015/2016 - GENAP</a></div>
                    <div class="change_semester" onclick="currentSemesterChange='1516/3'"><a href="#" style="font-weight:bold;">2015/2016 - ANTARA</a></div>
                    <div class="change_semester" onclick="currentSemesterChange='1617/1'"><a href="#" style="font-weight:bold;">2016/2017 - GANJIL</a></div>
                    <div class="change_semester" onclick="currentSemesterChange='1617/2'"><a href="#" style="font-weight:bold;">2016/2017 - GENAP</a></div>
                    <div class="change_semester" onclick="currentSemesterChange='1617/3'"><a href="#" style="font-weight:bold;">2016/2017 - ANTARA</a></div>
                    <div class="change_semester" onclick="currentSemesterChange='1718/1'"><a href="#" style="font-weight:bold;">2017/2018 - GANJIL</a></div>
                    <div class="change_semester" onclick="currentSemesterChange='1718/2'"><a href="#" style="font-weight:bold;">2017/2018 - GENAP</a></div>
                    <div class="change_semester" onclick="currentSemesterChange='1718/3'"><a href="#" style="font-weight:bold;">2017/2018 - ANTARA</a></div>
                    <div class="change_semester" onclick="currentSemesterChange='1819/1'"><a href="#" style="font-weight:bold;">2018/2019 - GANJIL</a></div>
                    <div class="change_semester" onclick="currentSemesterChange='1819/2'">
                        <div id="dashboard_current_semester"><a href="#">2018/2019 - GENAP</a></div>
                    </div>
                    <div class="change_semester" onclick="currentSemesterChange='1819/3'"><a href="#" style="font-weight:bold;">2018/2019 - ANTARA</a></div>
                </div>
                <div id="current_semester"><span class="other_semester" style="margin-left:-10px;">Semester Aktif :</span>
                    <div class="change_semester" onclick="currentSemesterChange='1920/1'">
                        <div id="dashboard_current_semester" style="margin-left:-15px;"><a href="#">2018/2019 - GENAP</a></div>
                    </div><span class="other_semester" style="margin-left:-10px;"><a href="#">Semester Lainnya</a></span></div>
            </ul>
            <hr>
            <ul>
                <li><a class="logout_link" href="https://igracias.telkomuniversity.ac.id/account/index.php?pageid=3801"><b>Ubah Profil</b></a></li>

                <li><a class="logout_link" href="https://igracias.telkomuniversity.ac.id/registration/logout.php"><b>Keluar</b></a></li>
            </ul>
        </div>
    </div>
    <div class="settings_wrapper">
        <div id="settings_wrapper_content">
            <h3>Pengaturan</h3>
            <hr>
            <ul>
                <li><a href="#"><span class="switchLanguageSpan">Bahasa : </span></a>
                    <a href="#" class="switch_language" rel="eng"><img src="1100121021%20Registrasi%20|%20Telkom%20University_files/en.jpg"> Eng</a> -
                    <img src="1100121021%20Registrasi%20|%20Telkom%20University_files/in.jpg"> <b>Ina</b> </li>
                <li><a href="https://igracias.telkomuniversity.ac.id/account/index.php?pageid=3782">Pengaturan Akun</a></li>
                <li><a href="https://igracias.telkomuniversity.ac.id/account/index.php?pageid=4461">Pengaturan Notifikasi</a></li>
            </ul>
        </div>
    </div>
    <div class="notifications_wrapper">
        <div id="notifications_wrapper_content">
            <h3>Notifikasi</h3>
            <hr>
            <ul id="notification_content">
            </ul>
            <hr>

        </div>
    </div>
    <div class="feedbacks_wrapper">
        <div id="backtotop_wrapper_content" style="float:left;padding:5px;">
            <a class="backtotop_link" href="#">Kembali Ke Atas</a>
        </div>
        <div id="separator" style="float:left;padding:5px;">
            <!--|	-->
        </div>
        <div id="feedbacks_wrapper_content" style="float:right;display:none;">
            <a class="feedback_link" href="https://igracias.telkomuniversity.ac.id/feedback/index.php?pageid=3701">Kirim Feedback</a>
        </div>
    </div>
    <span id="loading_info" style="display:none"><img src="1100121021%20Registrasi%20|%20Telkom%20University_files/ajax-loader.gif"></span>
    <div class="confirmDiv" style="width: 500px;">
        <div id="isi_pesan" style="display:block;">
        </div>
        <div id="loading_box" style="margin:20px;margin-bottom:15px;display:none;" align="center">
            <img src="1100121021%20Registrasi%20|%20Telkom%20University_files/big-ajax-loader.gif"><br> Loading....
        </div>
    </div>
    <div id="wrapper">
        <div id="location" class="location" style="font-weight:bold;color:white"> Lokasi : Registrasi &gt;&gt; Jadwal &gt;&gt; Jadwal Mahasiswa</div>
        <div id="main">
            <div class="container">
                <div id="hideShowMenu" style="width:100%; height:15px;margin-top:-4px;">
                    <a id="showMenu" title="Show Menu" style="text-align:left;display:none;" href="#"><img style="margin:0px;" src="1100121021%20Registrasi%20|%20Telkom%20University_files/showMenu.png" width="12px"></a>
                    <a id="hideMenu" style="margin-left:18%;margin-bottom:0px;" href="#" title="Hide Menu"><img src="1100121021%20Registrasi%20|%20Telkom%20University_files/hideMenu.png" width="12px"></a>
                </div>
                <div class="LeftContent">
                    <div align="center"><img style="padding-top:10px;padding-bottom:20px;align:center;" src="1100121021%20Registrasi%20|%20Telkom%20University_files/logo_tel_u.png"></div>
                    <div class="wpmenu">
                        <ul>
                            <li onclick="window.open('index.php?pageid=1001','_self')" class=" "><a class="parentMenu" href="https://igracias.telkomuniversity.ac.id/registration/index.php?pageid=1001" title="Home"><i></i>Beranda</a></li>
                            <li class=" "><a class="parentMenu" href="#" title="Registration"><i></i>Registrasi</a>
                                <ul>
                                    <li></li>
                                    <li onclick="window.open('index.php?pageid=761','_self')" class=" "><a class="" href="https://igracias.telkomuniversity.ac.id/registration/index.php?pageid=761" title="Course Registration"><i></i>Registrasi Mata Kuliah</a></li>
                                    <li onclick="window.open('index.php?pageid=1021','_self')" class=" "><a class="" href="https://igracias.telkomuniversity.ac.id/registration/index.php?pageid=1021" title="Student Registration Status"><i></i>Status Registrasi Mahasiswa</a></li>
                                    <li onclick="window.open('index.php?pageid=1042','_self')" class=" "><a class="" href="https://igracias.telkomuniversity.ac.id/registration/index.php?pageid=1042" title="Study Card Archive"><i></i>Arsip KSM</a></li>
                                    <li onclick="window.open('index.php?pageid=1121','_self')" class=" "><a class="" href="https://igracias.telkomuniversity.ac.id/registration/index.php?pageid=1121" title="Invoice Registration"><i></i>Tagihan Registrasi</a></li>
                                    <li onclick="window.open('index.php?pageid=5060','_self')" class=" "><a class="" href="https://igracias.telkomuniversity.ac.id/registration/index.php?pageid=5060" title="Registration Action History"><i></i>History Proses Registrasi</a></li>
                                </ul>
                            </li>
                            <li class=" "><a class="parentMenu" href="#" title="Schedule"><i></i>Jadwal</a>
                                <ul style="display: block;">
                                    <li></li>
                                    <li onclick="window.open('index.php?pageid=17985','_self')" class=" selected"><a class="" href="https://igracias.telkomuniversity.ac.id/registration/index.php?pageid=17985" title="Schedule Student"><i></i>Jadwal Mahasiswa</a></li>
                                    <li onclick="window.open('index.php?pageid=3321','_self')" class=" "><a class="" href="https://igracias.telkomuniversity.ac.id/registration/index.php?pageid=3321" title="Students Schedule Exam"><i></i>Jadwal Ujian Mahasiswa</a></li>
                                    <li onclick="window.open('index.php?pageid=162','_self')" class=" "><a class="" href="https://igracias.telkomuniversity.ac.id/registration/index.php?pageid=162" title="Academic Calendar"><i></i>Kalender Akademik</a></li>
                                </ul>
                            </li>
                            <li onclick="window.open('index.php?pageid=27378','_self')" class=" "><a class="parentMenu" href="https://igracias.telkomuniversity.ac.id/registration/index.php?pageid=27378" title="student resign"><i></i>Undur Diri Mahasiswa</a></li>
                            <li onclick="window.open('index.php?pageid=26598','_self')" class=" "><a class="parentMenu" href="https://igracias.telkomuniversity.ac.id/registration/index.php?pageid=26598" title="student leave"><i></i>Pengajuan Cuti</a></li>
                            <li class=" "><a class="parentMenu" href="#" title="Help"><i></i>Bantuan</a>
                                <ul>
                                    <li></li>
                                    <li onclick="window.open('index.php?pageid=3941','_self')" class=" "><a class="" href="https://igracias.telkomuniversity.ac.id/registration/index.php?pageid=3941" title="User Manual"><i></i>Manual Pengguna</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="RightContent">
                    <div id="main">
                        <div class="container">
                            <div class="fullwidth">

                                <!-- style tambahan untuk modul tertentu -->
                                <style type="text/css" title="currentStyle">
                                    @import "../styles/admin/demo_table_jui.css";
                                    			
                                    #calendarWrapper{
                                    margin-top:20px;
                                    }
                                </style>

                                <link rel="stylesheet" href="1100121021%20Registrasi%20|%20Telkom%20University_files/fbautocomplete.css" type="text/css">
                                <link rel="stylesheet" href="1100121021%20Registrasi%20|%20Telkom%20University_files/common.css" type="text/css">

                                <h3>Jadwal Mahasiswa</h3>

                                <form name="addform" id="addform" method="POST" action="">
                                    <table width="550px" cellspacing="1" border="0">

                                        <tbody>
                                            <tr>
                                                <td>Tahun Akademik</td>
                                                <td>:</td>
                                                <td>
                                                    <select name="schoolYear" id="schoolYear">
						<option value="1617/3">2016/2017 - ANTARA</option><option value="1718/1">2017/2018 - GANJIL</option><option value="1718/2">2017/2018 - GENAP</option><option value="1718/3">2017/2018 - ANTARA</option><option value="1819/1">2018/2019 - GANJIL</option><option value="1819/2" selected="selected">2018/2019 - GENAP</option><option value="1819/3">2018/2019 - ANTARA</option><option value="1920/1">2019/2020 - GANJIL</option><option value="1920/2">2019/2020 - GENAP</option><option value="1920/3">2019/2020 - ANTARA</option><option value="2021/1">2020/2021 - GANJIL</option>					</select>
                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </form>

                                <h3 class="ui-widget-header ui-corner-all" style="padding:5px;">NIM : 1100121021 - AOMINE DAIKI</h3>
                                <!-- Sementara di comment by dayat 12 agus 2014 untuk mengurangi beban server pas masa registrasi
<div id='calendarWrapper'></div>
-->
                                <div id="scheduleInset">
                                    <div style="width:1000px">
                                        <div align="right"><button id="closePreviewSchedule" type="button">x</button></div>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>INFORMATION </td>
                                                    <td>:</td>
                                                    <td style="color:green;">WARNA HIJAU BERARTI JADWAL TIDAK BENTROK</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td style="color:red;">WARNA KUNING BERARTI JADWAL BENTROK (Harus diatasi dengan pindah kelas sesuai ketentuan)</td>

                                                </tr>
                                            </tbody>
                                        </table>
                                        <div style="height:400px;overflow-y:scroll">
                                            <table id="table2" cellspacing="1" border="0">
                                                <thead>
                                                    <tr>
                                                        <th width="40px">SHIFT</th>
                                                        <th width="30px"></th>
                                                        <th width="100px">MONDAY</th>
                                                        <th width="100px">TUESDAY</th>
                                                        <th width="100px">WEDNESDAY</th>
                                                        <th width="100px">THURSDAY</th>
                                                        <th width="100px">FRIDAY</th>
                                                        <th width="100px">SATURDAY</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td align="center"><b>06:30-07:30</b></td>
                                                        <td>TEL-U</td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center"><b>07:30-08:30</b></td>
                                                        <td>TEL-U</td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center"><b>08:30-09:30</b></td>
                                                        <td>TEL-U</td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#AFD775">TTH533-TEORI INFORMASI DAN PENGKODEAN<br></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center"><b>09:30-10:30</b></td>
                                                        <td>TEL-U</td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#AFD775">TTH533-TEORI INFORMASI DAN PENGKODEAN<br></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center"><b>10:30-11:30</b></td>
                                                        <td>TEL-U</td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#AFD775">TTH533-TEORI INFORMASI DAN PENGKODEAN<br></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center"><b>11:30-12:30</b></td>
                                                        <td>TEL-U</td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center"><b>12:30-13:30</b></td>
                                                        <td>TEL-U</td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center"><b>13:30-14:30</b></td>
                                                        <td>TEL-U</td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center"><b>14:30-15:30</b></td>
                                                        <td>TEL-U</td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center"><b>15:30-16:30</b></td>
                                                        <td>TEL-U</td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#AFD775">TTH503-SISTEM KOMUNIKASI DIGITAL LANJUT<br></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center"><b>16:30-17:30</b></td>
                                                        <td>TEL-U</td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#AFD775">TTH503-SISTEM KOMUNIKASI DIGITAL LANJUT<br></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center"><b>17:30-18:30</b></td>
                                                        <td>TEL-U</td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#AFD775">TTH503-SISTEM KOMUNIKASI DIGITAL LANJUT<br></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center"><b>18:30-19:30</b></td>
                                                        <td>TEL-U</td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center"><b>19:30-20:30</b></td>
                                                        <td>TEL-U</td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center"><b>20:30-21:30</b></td>
                                                        <td>TEL-U</td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center"><b>21:30-22:30</b></td>
                                                        <td>TEL-U</td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                        <td align="center">
                                                            <div style="background:#F0F0F0"></div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <form method="POST" action="" name="viewform" id="viewform">
                                    <table id="tBentrok" width="750px" cellspacing="1" border="0" align="center">
                                        <thead>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td width="200px">
                                                    <h3>Jadwal Mahasiswa</h3>
                                                </td>

                                                <td>
                                                    <div style="margin:10px 0px 5px 0px;" class="panelButton" id="panelButton" align="right">
                                                        <button id="printButton" onclick="return printScheduleStudent();" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-primary" role="button" aria-disabled="false"><span class="ui-button-icon-primary ui-icon ui-icon-print"></span><span class="ui-button-text"> Print </span></button>

                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                        <tfoot>
                                        </tfoot>
                                    </table>
                                </form>
                                <div id="tDisplay_wrapper" class="dataTables_wrapper" role="grid">
                                    <div id="tDisplay_length" class="dataTables_length"><label>Show <select size="1" name="tDisplay_length" aria-controls="tDisplay"><option value="20" selected="selected">20</option><option value="30">30</option><option value="50">50</option><option value="100">100</option><option value="-1">All</option></select> entries</label></div>
                                    <div class="dataTables_filter" id="tDisplay_filter"><label>Search (Press Enter): <input type="text" class="searchDataTable" aria-controls="tDisplay"></label></div>
                                    <div id="tDisplay_processing" class="dataTables_processing" style="visibility: hidden;">Processing...</div>
                                    <table id="tDisplay" class="crud_table dataTable" style="font-family: verdana; font-size: 12px; color: rgb(51, 51, 51); width: 100%;" aria-describedby="tDisplay_info" width="100%" cellspacing="0" cellpadding="0" border="0" align="left">
                                        <thead>
                                            <tr role="row">
                                                <th class="sorting_asc" role="columnheader" tabindex="0" aria-controls="tDisplay" rowspan="1" colspan="1" style="width: 181px;" aria-label="Hari: activate to sort column ascending" width="100px">Hari</th>
                                                <th class="sorting" role="columnheader" tabindex="0" aria-controls="tDisplay" rowspan="1" colspan="1" style="width: 181px;" aria-label="Jam: activate to sort column ascending" width="100px">Jam</th>
                                                <th class="sorting" role="columnheader" tabindex="0" aria-controls="tDisplay" rowspan="1" colspan="1" style="width: 181px;" aria-label="Ruangan: activate to sort column ascending" width="100px">Ruangan</th>
                                                <th class="sorting" role="columnheader" tabindex="0" aria-controls="tDisplay" rowspan="1" colspan="1" style="width: 181px;" aria-label="Kode Mata Kuliah: activate to sort column ascending" width="100px">Kode Mata Kuliah</th>
                                                <th class="sorting" role="columnheader" tabindex="0" aria-controls="tDisplay" rowspan="1" colspan="1" style="width: 358px;" aria-label="Mata Kuliah: activate to sort column ascending" width="200px">Mata Kuliah</th>
                                                <th class="sorting" role="columnheader" tabindex="0" aria-controls="tDisplay" rowspan="1" colspan="1" style="width: 181px;" aria-label="Kelas: activate to sort column ascending" width="100px">Kelas</th>
                                                <th class="sorting" role="columnheader" tabindex="0" aria-controls="tDisplay" rowspan="1" colspan="1" style="width: 181px;" aria-label="Status: activate to sort column ascending" width="100px">Status</th>
                                            </tr>
                                        </thead>

                                        <tbody role="alert" aria-live="polite" aria-relevant="all" align="">
                                            <tr class="odd">
                                                <td class=" sorting_1">SELASA</td>
                                                <td>15:30 - 18:30</td>
                                                <td>RO3.02.03</td>
                                                <td>TTH503</td>
                                                <td>SISTEM KOMUNIKASI DIGITAL LANJUT</td>
                                                <td>IF-14-45</td>
                                                <td>TETAP</td>
                                            </tr>
                                            <tr class="even">
                                                <td class=" sorting_1">RABU</td>
                                                <td>08:30 - 11:30</td>
                                                <td>RO3.02.03</td>
                                                <td>TTH533</td>
                                                <td>TEORI INFORMASI DAN PENGKODEAN</td>
                                                <td>IF-14-45</td>
                                                <td>TETAP</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="dataTables_info" id="tDisplay_info">Showing 1 to 2 of 2 entries</div>
                                    <div class="dataTables_paginate paging_full_numbers" id="tDisplay_paginate"><a tabindex="0" class="first paginate_button paginate_button_disabled" id="tDisplay_first">First</a><a tabindex="0" class="previous paginate_button paginate_button_disabled" id="tDisplay_previous">Previous</a><span><a tabindex="0" class="paginate_active">1</a></span><a tabindex="0" class="next paginate_button paginate_button_disabled" id="tDisplay_next">Next</a><a tabindex="0" class="last paginate_button paginate_button_disabled" id="tDisplay_last">Last</a></div>
                                </div>
                                <script type="text/javascript" language="javascript" src="1100121021%20Registrasi%20|%20Telkom%20University_files/action.js"></script>
                                <script type="text/javascript" language="javascript" src="1100121021%20Registrasi%20|%20Telkom%20University_files/jquery.js"></script>
                                <script type="text/javascript" language="javascript" src="1100121021%20Registrasi%20|%20Telkom%20University_files/jquery_002.js"></script>
                                <script type="text/javascript" src="1100121021%20Registrasi%20|%20Telkom%20University_files/jquery_008.js"></script>
                                <script type="text/javascript" src="1100121021%20Registrasi%20|%20Telkom%20University_files/jquery_009.js"></script>
                                <script type="text/javascript" src="1100121021%20Registrasi%20|%20Telkom%20University_files/jquery_006.js"></script>
                                <script type="text/javascript" src="1100121021%20Registrasi%20|%20Telkom%20University_files/jquery_011.js"></script>
                                <script type="text/javascript" src="1100121021%20Registrasi%20|%20Telkom%20University_files/jquery_010.js"></script>
                                <script type="text/javascript" src="1100121021%20Registrasi%20|%20Telkom%20University_files/jquery_003.js"></script>
                                <script type="text/javascript" src="1100121021%20Registrasi%20|%20Telkom%20University_files/fbautocomplete.js"></script>

                                <script type="text/javascript" src="1100121021%20Registrasi%20|%20Telkom%20University_files/jquery_005.js"></script>

                                <script>
                                    $(document).ready(function(){
                                    				$("#scheduleInset").load("../libraries/ajax/ajax.schedule.php?act=previewSchedule&studentid=1100121021&sch=1819&sm=2");
                                    				$("#scheduleInset").show();
                                    				
                                    				
                                    				
                                    					$("#calendarWrapper").load("../libraries/ajax/ajax.schedule.php?act=getschedulestudenttableview",{ 
                                    						'studentId' : '1100121021',
                                    						'schoolYear' : 1819,
                                    						'semester' : 2					});
                                    					
                                    					oDataTable = $('#tDisplay').dataTable( {		
                                    						"bPaginate": true,
                                    						"sPaginationType": "full_numbers",
                                    						"bJQueryUI":false,				
                                    						"aoColumnDefs": [
                                    																			],									
                                    						"bProcessing": true,
                                    						"bServerSide": true,
                                    						"fnServerData": function ( sSource, aoData, fnCallback ) {
                                    								aoData.push( 
                                    									{ "name": "schoolYear", "value": $('#schoolYear').val()}				
                                    								);
                                    								$.getJSON( sSource, aoData, function (json) { 
                                    									fnCallback(json)
                                    								} );
                                    							},						
                                    						"sAjaxSource": "../libraries/ajax/ajax.schedule.php?act=viewStudentSchedule&studentId=1100121021",
                                    						"fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
                                    								
                                    								$(nRow).html("<td>"+aData[0]+"</td><td>"+aData[1].substr(0,5)+" - "+aData[7].substr(0,5)+"</td><td>"+aData[2]+"</td><td>"+aData[3]+"</td><td>"+aData[4]+"</td><td>"+aData[6]+"</td><td>"+aData[8]+"</td>");							
                                    								return nRow;
                                    							}
                                    
                                    					} );
                                    				});
                                </script>

                                <script type="text/javascript">
                                    $(document).ready(function(){
                                    		$('#schoolYear').change(function(){
                                    			oDataTable.fnDraw();
                                    			
                                    			var schoolYearx=$('#schoolYear').val().split('/');
                                    			var schoolYear=schoolYearx[0];
                                    			var semester=schoolYearx[1];	
                                    			
                                    			//$("#calendarWrapper").html('');
                                    			
                                    			//$("#calendarWrapper").load("../libraries/ajax/ajax.schedule.php?act=getschedulestudenttableview",{ 
                                    			//			'studentId' : '1100121021',
                                    			//			'schoolYear' : schoolYear,
                                    			//			'semester' : semester
                                    			//});
                                    			$("#scheduleInset").html('');
                                    			$("#scheduleInset").load("../libraries/ajax/ajax.schedule.php?act=previewSchedule&studentid=1100121021&sch="+schoolYear+"&sm="+semester);
                                    			$("#scheduleInset").show();
                                    			
                                    		});
                                    	});
                                    	
                                    	function printScheduleStudent() {
                                    					window.open('index.php?pageid=2901','_blank');
                                    						
                                    		return false;
                                    	}
                                    	
                                    	$(function(){
                                    		$("#printButton").button({
                                    			icons: {
                                    				primary: "ui-icon-print"
                                    			}
                                    		});
                                    		
                                    		$("#insertNewButton").button({
                                    			icons: {
                                    				primary: "ui-icon-plus"
                                    			}
                                    		});
                                    		
                                    		$("#saveCSVButton").button({
                                    			icons: {
                                    				primary: "ui-icon-disk"
                                    			}
                                    		});
                                    	});
                                </script>

                                <br>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end wrapper -->
    <div id="footer" align="center">

        i-GRACIAS © 2013 <a href="http://is.telkomuniversity.ac.id/" target="new">Direktorat Sistem Informasi</a><br><a href="http://www.telkomuniversity.ac.id/" target="new">Telkom University</a>-9</div>

    <script type="text/javascript">
        var libraryAjaxUrl = "../libraries/ajax/";
        	var imageUrl = "../images/";
        	var javaScriptUrl = "../javascripts/";
        	var currentUrl = "http://10.252.252.178/registration/?pageid=17985";
        	
        	$(document).ready(function(){
        		
        		//javascript for show and hide left menu
        		$('#showMenu').hide();
        		$('#showMenu').live('click', function(){
        			$('#showMenu').hide();
        			
        			$('.RightContent').animate({ width: '80%' }, 'Slide', function() {
        				// Animation complete.
        					$(".LeftContent").show();
        				});
        			$('#hideMenu').show('slow');
        			return false;
        		});
        		
        		$('#hideMenu').live('click', function(){
        			$('#showMenu').show();
        			$(".LeftContent").hide( );
        			$('.RightContent').animate({ width: '100%' }, 'Slide');
        			$('#hideMenu').hide();
        		});
        		
        		
        		//javascript for dropdown menu
        		$('.wpmenu .parentMenu').live('click', function(){
        			
        			if($(this).attr('href')=="#")
        			{
        				var obj=$(this).parent();
        				obj.children("ul").each(function(){
        					if($(this).hasClass('open'))
        					{
        						$(this).hide();
        						$(this).removeClass('open');
        					}else
        					{
        						$(this).show();
        						$(this).addClass('open');
        					}
        					
        				});
        				
        				return false;
        			}else
        				return true;
        			
        		});
        		
        		//javascript to show selected menu
        		$('.wpmenu .selected').parent().show();
        		
        		//set menu always on top
        		 /* $(window).bind('scroll', function() {
        			 if ($(window).scrollTop() > 0) {
        				 $('.wpmenu').addClass('fixed');
        			 }
        			 else {
        				 $('.wpmenu').removeClass('fixed');
        			 }
        		}); */
        		
        	});
    </script>
    <script type="text/javascript" src="1100121021%20Registrasi%20|%20Telkom%20University_files/hoverIntent.js"></script>
    <script type="text/javascript" src="1100121021%20Registrasi%20|%20Telkom%20University_files/superfish.js"></script>
    <script type="text/javascript" src="1100121021%20Registrasi%20|%20Telkom%20University_files/custom.js"></script>
    <script type="text/javascript" src="1100121021%20Registrasi%20|%20Telkom%20University_files/init_default.js"></script>

    <div class="messageDiv" style="width: 500px;">
        <div id="isi_pesan" style="display:block;">
        </div>
        <div id="loading_box" style="margin:20px;margin-bottom:15px;display:none;" align="center">
            <img src="1100121021%20Registrasi%20|%20Telkom%20University_files/big-ajax-loader.gif"><br> Loading....
        </div>
    </div>
</body>

</html>`;
