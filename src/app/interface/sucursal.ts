

export interface Sucursal {
    id?: null;
    nom_sucursal: string;
    nom_admin: string;
    tel: string;
    direccion: string;
    fax: string;
    pedidos_mes: number;
    created_at:   Date | null;
    updated_at:   Date | null;

}
