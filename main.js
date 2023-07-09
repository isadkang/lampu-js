const on = 'assets/images/on.gif';
const off = 'assets/images/off.gif';

const lampu1RuangKeluarga = document.getElementById('lampu1-ruangkeluarga')
const lampu2RuangKeluarga = document.getElementById('lampu2-ruangkeluarga')
const lampu3RuangKeluarga = document.getElementById('lampu3-ruangkeluarga')
const lampuRuangMakan = document.getElementById('lampuruangmakan')
const lampu1RuangTidur = document.getElementById('lampu1-ruangtidur')
const lampu2RuangTidur = document.getElementById('lampu2-ruangtidur')
const lampu1RuangTamu = document.getElementById('lampu1-ruangtamu')
const lampu2RuangTamu = document.getElementById('lampu2-ruangtamu')
const lampu3RuangTamu = document.getElementById('lampu3-ruangtamu')
const lampu4RuangTamu = document.getElementById('lampu4-ruangtamu')

const toggle1RuangKeluarga = document.getElementById('toggle-1-ruangkeluarga')
const toggle2RuangKeluarga = document.getElementById('toggle-2-ruangkeluarga')
const toggle3RuangKeluarga = document.getElementById('toggle-3-ruangkeluarga')
const toggleRuangMakan = document.getElementById('toggle-ruangmakan')
const toggle1RuangTidur = document.getElementById('toggle-1-ruangtidur')
const toggle2RuangTidur = document.getElementById('toggle-2-ruangtidur')
const toggle1RuangTamu = document.getElementById('toggle-1-ruangtamu')
const toggle2RuangTamu = document.getElementById('toggle-2-ruangtamu')
const toggle3RuangTamu = document.getElementById('toggle-3-ruangtamu')
const toggle4RuangTamu = document.getElementById('toggle-4-ruangtamu')

const allLampsRuangKeluarga = document.getElementById('allLamps-ruangkeluarga')
const allLampsRuangMakan = document.getElementById('allLamps-ruangmakan')
const allLampsRuangTidur = document.getElementById('allLamps-ruangtidur')
const allLampsRuangTamu = document.getElementById('allLamps-ruangtamu')


function saklarKeluarga() 
{

  lampu1RuangKeluarga.src = toggle1RuangKeluarga.checked ? on : off
  lampu2RuangKeluarga.src = toggle2RuangKeluarga.checked ? on : off
  lampu3RuangKeluarga.src = toggle3RuangKeluarga.checked ? on : off

}

function ruanganKeluarga() 
{

  toggle1RuangKeluarga.checked = allLampsRuangKeluarga.checked
  toggle2RuangKeluarga.checked = allLampsRuangKeluarga.checked
  toggle3RuangKeluarga.checked = allLampsRuangKeluarga.checked

  lampu1RuangKeluarga.src = allLampsRuangKeluarga.checked ? on : off
  lampu2RuangKeluarga.src = allLampsRuangKeluarga.checked ? on : off
  lampu3RuangKeluarga.src = allLampsRuangKeluarga.checked ? on : off

}

function saklarMakan() 
{
    lampuRuangMakan.src = toggleRuangMakan.checked ? on : off
}

function ruangMakan() 
{
  toggleRuangMakan.checked = allLampsRuangMakan.checked
  lampuRuangMakan.src = allLampsRuangMakan.checked ? on : off

}

function saklarTidur() 
{
  lampu1RuangTidur.src = toggle1RuangTidur.checked ? on : off
  lampu2RuangTidur.src = toggle2RuangTidur.checked ? on : off
}

function ruangTidur()
{
  toggle1RuangTidur.checked = allLampsRuangTidur.checked
  toggle2RuangTidur.checked = allLampsRuangTidur.checked

  lampu1RuangTidur.src = allLampsRuangTidur.checked ? on : off
  lampu2RuangTidur.src = allLampsRuangTidur.checked ? on : off
}

function saklarTamu()
{
  lampu1RuangTamu.src = toggle1RuangTamu.checked ? on : off
  lampu2RuangTamu.src = toggle2RuangTamu.checked ? on : off
  lampu3RuangTamu.src = toggle3RuangTamu.checked ? on : off
  lampu4RuangTamu.src = toggle4RuangTamu.checked ? on : off

}

function ruangTamu() 
{

  toggle1RuangTamu.checked = allLampsRuangTamu.checked
  toggle2RuangTamu.checked = allLampsRuangTamu.checked
  toggle3RuangTamu.checked = allLampsRuangTamu.checked
  toggle4RuangTamu.checked = allLampsRuangTamu.checked

  lampu1RuangTamu.src = allLampsRuangTamu.checked ? on : off
  lampu2RuangTamu.src = allLampsRuangTamu.checked ? on : off
  lampu3RuangTamu.src = allLampsRuangTamu.checked ? on : off
  lampu4RuangTamu.src = allLampsRuangTamu.checked ? on : off
  
}