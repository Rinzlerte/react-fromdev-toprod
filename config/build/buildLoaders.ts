import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {


    const cssLoaders = {
        test: /(\.css|\.scss)$/,
        use: [

            options.isDev ? 'style-loader' :
            MiniCssExtractPlugin.loader,
            "css-loader",
            // {
            //     loader:  "css-loader",
            //     options: {
            //         modules: true
            //     }
            //  }, 
            "sass-loader"
        ]
    }
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        cssLoaders
    ]
}
