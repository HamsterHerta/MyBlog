---
title: Neovim
createTime: 2025/07/26 09:32:10
permalink: /mem/aaf4xtyw/
---

> [!info]
> **更新**
> 
> **进一步阅读**
> 

## 开始
### Neovim 安装
Neovim 在 MacOS系统中可以直接利用Homebrew安装：
```shell
brew install neovim
```

### 配置文件结构
在配置Neovim前，我们需要了解配置的相关知识。Neovim配置的编写语言为lua，配置文件的在Mac下的默认目录为`~/.config/nvim`，配置文件的结构一般为：  
```
# ~/.config/nvim
.
├── init.lua
└── lua
    ├── config
    │   └── lazy.lua
    └── plugins
        └── treesitter.lua
```

### 插件管理
我们采用lazy.nvim来管理Neovim的插件。首先安装lua的运行环境：
```shell
brew install lua
brew install luarocks
```

初次安装Neovim，需要按配置文件结构建立新文件：
```shell
cd ~/.config
mkdir nvim
cd ./nvim
touch init.lua
mkdir lua
cd lua
mkdir config
mkdir plugins
touch ./config/lazy.lua
```
新建文件后，进入[lazy.nvim官网](https://lazy.folke.io/installation)配置lazy.nvim

::: steps 
1. **配置init.lua文件**  
在init.lua文件中写入：
```lua
require("config.lazy")
```

2. **配置lazy.lua文件**
```lua
-- Bootstrap lazy.nvim
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not (vim.uv or vim.loop).fs_stat(lazypath) then
  local lazyrepo = "https://github.com/folke/lazy.nvim.git"
  local out = vim.fn.system({ "git", "clone", "--filter=blob:none", "--branch=stable", lazyrepo, lazypath })
  if vim.v.shell_error ~= 0 then
    vim.api.nvim_echo({
      { "Failed to clone lazy.nvim:\n", "ErrorMsg" },
      { out, "WarningMsg" },
      { "\nPress any key to exit..." },
    }, true, {})
    vim.fn.getchar()
    os.exit(1)
  end
end
vim.opt.rtp:prepend(lazypath)

-- Make sure to setup `mapleader` and `maplocalleader` before
-- loading lazy.nvim so that mappings are correct.
-- This is also a good place to setup other settings (vim.opt)
vim.g.mapleader = " "
vim.g.maplocalleader = "\\"

-- Setup lazy.nvim
require("lazy").setup({
  spec = {
    -- import your plugins
    { import = "plugins" },
  },
  -- Configure any other settings here. See the documentation for more details.
  -- colorscheme that will be used when installing plugins.
  install = { colorscheme = { "habamax" } },
  -- automatically check for plugin updates
  checker = { enabled = true },
})
```
3. **下载lazy.nvim**  
创建`treesitter.lua`文件：
```shell
cd ~/.config/nvim/lua/plugins
touch treesitter.lua
```
并写入如下语句：
```lua
return{

} 
```
再次打开Neovim，就会自动下载。此时终端会显示黑屏，等待片刻，出现Dashboard时，输入`:Lazy`弹出lazy.nvim界面说明安装成功。
:::  
> [!tip]
> 1. 可以用`:q`命令退出lazy.nvim  
> 2. lazy.nvim的安装位置一般为`~/.local/share/nvim/lazy/lazy.nvim`  


## 基础设置
本章节涉及Neovim基础功能的补全，包括显示代码行数、代码高亮、代码自动补全以及AI功能的调用。 主要下载的插件为：
* nvim-treesitter: 代码高亮
* mason.nvim: 下载LSP
* nvim-lspconfig: 配置LSP
* blink.cmp: 代码补全引擎

### 代码高亮
Neovim 的代码高亮功能主要由 treesitter 插件实现。进入 [treesitter 安装页面](https://github.com/nvim-treesitter/nvim-treesitter/wiki/Installation), 复制 `lazy.nvim` 下的代码到 treesitter.lua文件中：
```lua
return {
  {
    "nvim-treesitter/nvim-treesitter",
    build = ":TSUpdate",
    config = function () 
      local configs = require("nvim-treesitter.configs")

      configs.setup({
          ensure_installed = { "c", "lua", "vim", "vimdoc", "query", "elixir", "heex", "javascript", "html" },
          sync_install = false,
          highlight = { enable = true },
          indent = { enable = true },  
        })
    end
 }
}
```
然后启动lazy.nvim, 等待安装完成。安装完成后，Neovim中的代码就会显示高亮了。

### 代码自动补全
代码自动补全功能由LSP提供  

::: steps
1. **下载LSP**  
新建`lsp.lua`文件，进入[mason.nvim主页](https://github.com/mason-org/mason.nvim)，并写入如下代码：

```lua
return {
  {
    "williamboman/mason.nvim",
    opts = {
      ensure_installed = {
        "lua-language-server",
      },
    },
    config = function(_, opts)
      require("mason").setup(opts)
      local mr = require("mason-registry")
      local function ensure_installed()
        for _, tool in ipairs(opts.ensure_installed) do
          local p = mr.get_package(tool)
          if not p:is_installed() then
            p:install()
          end
        end
      end
      if mr.refresh then
        mr.refresh(ensure_installed)
      else
        ensure_installed()
      end
    end,
  },
}
```

2. **配置LSP**  
该功能由nvim-lspconfig插件实现，但我们不会按照官网的方法安装。  
首先进入[blink.cmp安装页面](https://cmp.saghen.dev/installation), 复制以下代码到 `lsp.lua`文件中：
```lua
{
  'neovim/nvim-lspconfig',
  dependencies = { 'saghen/blink.cmp' },

 -- example calling setup directly for each LSP
  config = function()
    local capabilities = require('blink.cmp').get_lsp_capabilities()
    local lspconfig = require('lspconfig')

    lspconfig['lua_ls'].setup({ capabilities = capabilities })
  end
}
```
此时不要打开Neovim，需要在blink.cmp配置完成后再安装。  
新建`completion.lua`文件，写入blink.cmp安装界面的lazy.nvim配置：
```lua
{
  'saghen/blink.cmp',
  -- optional: provides snippets for the snippet source
  -- dependencies = { 'rafamadriz/friendly-snippets' },

  -- use a release tag to download pre-built binaries
  version = '1.*',
  -- AND/OR build from source, requires nightly: https://rust-lang.github.io/rustup/concepts/channels.html#working-with-nightly-rust
  -- build = 'cargo build --release',
  -- If you use nix, you can build from source using latest nightly rust with:
  -- build = 'nix run .#build-plugin',

  ---@module 'blink.cmp'
  ---@type blink.cmp.Config
  opts = {
    -- 'default' (recommended) for mappings similar to built-in completions (C-y to accept)
    -- 'super-tab' for mappings similar to vscode (tab to accept)
    -- 'enter' for enter to accept
    -- 'none' for no mappings
    --
    -- All presets have the following mappings:
    -- C-space: Open menu or open docs if already open
    -- C-n/C-p or Up/Down: Select next/previous item
    -- C-e: Hide menu
    -- C-k: Toggle signature help (if signature.enabled = true)
    --
    -- See :h blink-cmp-config-keymap for defining your own keymap
    keymap = { preset = 'default' },

    appearance = {
      -- 'mono' (default) for 'Nerd Font Mono' or 'normal' for 'Nerd Font'
      -- Adjusts spacing to ensure icons are aligned
      nerd_font_variant = 'mono'
    },

    -- (Default) Only show the documentation popup when manually triggered
    completion = { documentation = { auto_show = false } },

    -- Default list of enabled providers defined so that you can extend it
    -- elsewhere in your config, without redefining it, due to `opts_extend`
    sources = {
      default = { 'lsp', 'path', 'snippets', 'buffer' },
    },

    -- (Default) Rust fuzzy matcher for typo resistance and significantly better performance
    -- You may use a lua implementation instead by using `implementation = "lua"` or fallback to the lua implementation,
    -- when the Rust fuzzy matcher is not available, by using `implementation = "prefer_rust"`
    --
    -- See the fuzzy documentation for more information
    fuzzy = { implementation = "prefer_rust_with_warning" }
  },
  opts_extend = { "sources.default" }
}
```
并将`dependencies = { 'rafamadriz/friendly-snippets' },`语句注释
:::

### AI功能


## 界面美化
### 界面布局
对于一个完整的编辑器，还需要状态栏、标签栏、文件列表以及内置终端等布局。
::: steps
1. **lualine.nvim状态栏插件**  
在 `plugins/ui.lua` 中添加如下代码：
```lua
return {
  {
    'nvim-lualine/lualine.nvim',
    dependencies = {
       'nvim-tree/nvim-web-devicons'
    },
    opts = {
      options = {
        theme = "catppuccin",
        always_divide_middle = false,
        component_separators = { left = "", right = "" },
        section_separators = { left = "", right = "" },
      },
      sections = {
        lualine_a = { "mode" },
        lualine_b = { "branch", "diff", "diagnostics" },
        lualine_c = { "filename" },
        lualine_x = {},
        lualine_y = { "encoding", "fileformat", "filetype", "progress" },
        lualine_z = { "location" },
      },
      winbar = {
        lualine_a = {
          "filename"
        },
        lualine_b = {
          { function() return " " end, color = 'Comment'},
        },
        lualine_x = {
          "lsp_status"
        }
      },
      inactive_winbar = {
        -- Always show winbar
        lualine_b = { function() return " " end },
      },
    },
    config = function(_, opts)
      local mocha = require("catppuccin.palettes").get_palette("mocha")

      local function show_macro_recording()
        local recording_register = vim.fn.reg_recording()
        if recording_register == "" then
          return ""
        else
          return "󰑋 " .. recording_register
        end
      end

      local macro_recording = {
        show_macro_recording,
        color = { fg = "#333333", bg = mocha.red },
        separator = { left = "", right = "" },
        padding = 0,
      }

      table.insert(opts.sections.lualine_x, 1, macro_recording)

      require("lualine").setup(opts)
    end
  },
}
```

2. **barbar.nvim标签栏插件**  
还是在 `ui.lua` 文件中添加代码：

```lua
  {
    'romgrk/barbar.nvim',
    version = '^1.0.0', -- optional: only update when a new 1.x version is released
    dependencies = {
      'lewis6991/gitsigns.nvim',
      'nvim-tree/nvim-web-devicons',
    },
    init = function() 
      vim.g.barbar_auto_setup = false 
    end,
    opt = {}
  }
```

3. **nvim-tree.lua文件列表**  
在文件 `init.lua` 中添加：
```lua
-- disable netrw at the very start of your init.lua
vim.g.loaded_netrw = 1
vim.g.loaded_netrwPlugin = 1
```

在文件 `ui.lua` 中添加：
```lua
  {
    "nvim-tree/nvim-tree.lua",
    version = "*",
    dependencies = {
      "nvim-tree/nvim-web-devicons",
    },
    keys = {
      { "<leader>e", "<CMD>NvimTreeToggle<CR>", mode = {"n"}, desc = "[NvimTree] Toggle NvimTree" },
    },
    opts = {}
  },

  {
    "HiPhish/rainbow-delimiters.nvim",
    main = "rainbow-delimiters.setup",
    submodules = false,
    opts = {}
  },
```

:::

### 配色美化


## 参考资料

[1] [Mac 从 0 到 1 保姆级配置教程 08](https://blog.csdn.net/xiang__qian/article/details/146302821)  

[2] [Neovim的入门指南](https://zhuanlan.zhihu.com/p/577413629)  

[3] [Neovim从入门到出门](https://space.bilibili.com/23686471/lists?sid=5304627&spm_id_from=333.788.0.0)  

[4] [Neovim 初学者教程（已完结）](https://www.bilibili.com/video/BV1N6ZRY7Etj/?spm_id_from=333.337.search-card.all.click&vd_source=5c9f37d1f868b9fbb362c9b04d797851)  

[5] [从零开始配置 Neovim(Nvim)](https://martinlwx.github.io/zh-cn/config-neovim-from-scratch/)  

