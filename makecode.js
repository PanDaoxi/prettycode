function jntm(str) {
  if(str.includes("&")) str = str.replace(/&/g,"&amp;");
  if(str.includes("<")) str = str.replace(/\</g,"&lt;");
  if(str.includes(">")) str = str.replace(/\>/g,"&gt;");
  if(str.includes("'")) str = str.replace(/\'/g,"&apos;");
  if(str.includes('"')) str = str.replace(/\"/g,"&quot;");
  return str;
}

function fun() {
	// 语言
	var cl = document.getElementById("choicelang");
	var cl_s = cl.selectedIndex;
	var lang = cl[cl_s].innerText;
	if(lang != "— 选择语言 —") cl.classList.add("language-" + lang);
	
	// 字体
	var cf = document.getElementById("choicefont");
	var cf_s = cf.selectedIndex;
	var font = cf[cf_s].innerText;
	if(font == "— 选择字体 —" || font == "Monospace") font = "monospace";
	var cp = document.querySelector("#codeprint");
	cp.style.fontFamily = font;
	
	// 高亮
	var cs = document.getElementById("choicestyle");
	var cs_s = cs.selectedIndex;
	var highlight = cs[cs_s].innerText;
	if(highlight == "— 选择高亮预设 —") highlight = "default";
	document.getElementById("hljscodestyle").href = "./highlight/styles/" + highlight + ".min.css";
	
	// 转移
	document.getElementById("codeprint").innerHTML = jntm(document.getElementById("codebox").value);
	hljs.highlightBlock(document.getElementById("codeprint"));
}