$(document).ready(function () {
    var menuContainer = document.getElementById('nav-comp-container');
    menuContainer.innerHTML = `
    <div class="container">
        <a class="navbar-brand text-white" href="index.html" style="font-weight: 500;">
            <span style="font-weight: 100;">
                <img src="pic/gtrlogo.jpg" alt="Alternate Text" style="height: 90px;" /></span></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse text-center" id="navbarsExampleDefault">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active ">
                    <a class="nav-link text-white  menubuton " href="index.html">Anasayfa</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white menubuton" href="hakkimizda.html">Hakkımızda</a>
                </li>                   
                <li class="nav-item">
                    <a class="nav-link text-white menubuton" href="urunler.html">Ürünler</a>
                </li>                
                <li class="nav-item">
                    <a class="nav-link text-white menubuton" href="iletisim.html">İletişim</a>
                </li>
            </ul>
        </div>
    </div>`;

    var footerContainer = document.getElementById('footer-container');

    footerContainer.innerHTML = `<div class="container pt-5 pb-2">
    <div class="row">
        <div class="col-md-4 col-lg-4 col-xl-4 col-xs-12 mx-auto ">
            <h4>Bağlantılar</h4>
            <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25">
            <p>
                <a href="index.html">
                    <i class="fas fa-home"></i>&nbsp;Anasayfa</a>
            </p>
            <p>
                <a href="hakkimizda.html">
                    <i class="fas fa-book"></i>&nbsp;Hakkımızda</a>
            </p>
            <p>
            <a href="urunler.html">
                <i class="fas fa-id-badge"></i>
                </i>&nbsp;Ürünler</a>
            </p>
            <p>
                <a href="iletisim.html">
                    <i class="fas fa-phone-volume"></i>&nbsp;İletişim</a>
            </p>           
        </div>     

        <div class="col-md-4 col-lg-4 col-xl-4 col-xs-12">
            <h4>Bize Ulaşın</h4>
            <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25">
            <p>
                <i class="fa fa-home mr-3"></i>
                Adres
            </p>
            <p>
                <i class="fa fa-envelope mr-3"></i>
                Email:  
            </p>
            <p>
                <i class="fa fa-phone mr-3"></i>
                Telefon 0506 055 59 83
            </p>
            
        </div>
    </div>
    
</div><hr class="bg-white mx-4 mt-2 mb-1">
<div class="container-fluid">
    <p class="text-center m-0 py-1">
        ©  Copyright by Mehmetcan Şentürk
    </p>
</div>`;

});
