// Created by iWeb 3.0.4 local-build-20160620

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.464033}),stroke_0:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://carmelartist.com/ucsfortho/UCSF_Orthodontics/Faculty_Clinic/rss.xml");}
function onPageLoad()
{loadMozillaCSS('Faculty_Clinic_files/Faculty_ClinicMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');detectBrowser();adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
