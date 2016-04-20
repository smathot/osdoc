#!/usr/bin/env python3
# coding=utf-8

from yamldoc._yaml import orderedLoad
from collections import OrderedDict

ROOT = ''
SUFFIX = '.html'

def isseparator(pagename):

	for ch in pagename:
		if ch != '_':
			return False
	return True


def build_menu(d):

	l = []
	for pagename, entry in d.items():
		if isseparator(pagename):
			l.append('<li><hr /></li>')
			continue
		if entry is None:
			l.append('<li class="cogsci-menuitem-header">%s</li>' % pagename)
			continue
		if isinstance(entry, dict):
			l.append(
				('<li><a href="#" class="dropdown-toggle" data-toggle="dropdown">'
				'%s<b class="caret"></b></a>') \
				% pagename)
			l.append('<ul class="dropdown-menu">')
			l.append(build_menu(entry))
			l.append('</ul></li>')
			continue
		if entry.startswith('http'):
			l.append('<li><a href="%s">%s</a></li>' % (entry, pagename))
		else:
			l.append('<li><a href="%s/%s%s">%s</a></li>' \
				% (ROOT, entry, SUFFIX, pagename))
	return '\n'.join(l)


with open('sitemap.yaml') as f:
	d = orderedLoad(f)
with open('themes/cogsci/templates/menu-content.html', 'w') as f:
	f.write(build_menu(d))