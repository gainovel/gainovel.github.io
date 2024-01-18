# @Author       : Gainovel
# @Organization : Copyright © 2023-2024 gainovel.com All Rights Reserved.
# @Date         : 2024-01-16 16:15:12 星期二
# @ProductName  : GoLand
# @PrjectName   : blog
# @File         : /Makefile
# @Version      : v0.1.0
# @Description  : 开发中···

.PHONY: hugo/server

hugo/server:
	@hugo server --disableFastRender --bind="0.0.0.0" -p 80

hugo:
	@hugo